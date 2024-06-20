import { useEffect, useState } from 'react';
import supabase from '../../supabase/config';
import { v4 as uuidv4 } from 'uuid';
import playBtn from '../../assets/playBtn.png';

import {
  CommentForm,
  CommentFormContainer,
  CommentH2,
  Container,
  CourseList,
  Details,
  Image,
  List,
  ListItem,
  PlayBtn,
  StH2,
  StInput,
  StyledLink,
  SubmitButton,
  SubmitButtonWrap,
  TeacherName,
  Title
} from './PlayListDetailStyle';

import { useQuery } from '@tanstack/react-query';
import { fetchPlaylist } from '../../api/playlistApi';
import { useParams } from 'react-router-dom';
import useLogStore from '../../zustand/user-log';
import { EditComment } from '../../components/EditComment/EditComment';

const Detail = () => {
  const { id } = useParams();
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');
  const [dropdownStates, setDropdownStates] = useState({});
  const { user } = useLogStore();

  useEffect(() => {
    const fetchComments = async () => {
      const { data: Comments, error } = await supabase.from('Comments').select('*').eq('playlistId', id);
      if (error) {
        console.error(error);
        alert('supabase에서 데이터를 가져오는 중 오류가 발생했습니다.');
        return;
      }
      setCommentsInfo(Comments);
    };
    fetchComments();
  }, [id]);

  const {
    data: playlist,
    isLoading,
    error
  } = useQuery({
    queryKey: ['playlist', id],
    queryFn: () => fetchPlaylist(id)
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comments.trim()) return alert('댓글 내용을 입력해주세요');

    try {
      const { data, error } = await supabase
        .from('Comments')
        .insert({
          commentId: uuidv4(),
          userId: user.id,
          playlistId: id,
          content: comments,
          createdAt: new Date().toISOString()
        })
        .select('*');

      if (error) {
        console.error('댓글 삽입 중 오류 발생:', error);
        alert('댓글 작성 중 오류가 발생했습니다.');
        return;
      }

      setCommentsInfo((prevComments) => [...prevComments, ...data]);
      setComments('');
    } catch (err) {
      console.error('오류 발생:', err);
      alert('오류가 발생했습니다.');
    }
  };

  const handleUpdate = async (commentIdToUpdate, comments) => {
    const { error } = await supabase.from('Comments').update({ content: comments }).eq('commentId', commentIdToUpdate);
    if (error) {
      console.error('댓글 수정 중 오류 발생:', error);
      alert('댓글 수정 중 오류가 발생했습니다.');
      return;
    } else {
      alert('댓글이 수정되었습니다!');
    }
    setCommentsInfo((currentComments) =>
      currentComments.map((comment) =>
        comment.commentId === commentIdToUpdate ? { ...comment, content: comments } : comment
      )
    );
    setComments('');
  };

  const handleDelete = async (commentIdToDelete) => {
    const confirmed = confirm('정말로 댓글을 삭제하시겠습니까?');
    if (confirmed) {
      const { error } = await supabase.from('Comments').delete().eq('commentId', commentIdToDelete).select();
      if (error) {
        console.error('댓글 삭제 중 오류 발생:', error);
        alert('댓글 삭제 중 오류가 발생했습니다.');
        return;
      }
      setCommentsInfo((currentComments) =>
        currentComments.filter((comment) => comment.commentId !== commentIdToDelete)
      );
    }
  };

  const toggleDropdown = (commentId) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [commentId]: !prevStates[commentId]
    }));
  };

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>데이터 로드 중 오류가 발생했습니다.</div>;

  if (!playlist || playlist.length === 0) return <div>유효한 데이터가 없습니다.</div>;

  return (
    <Container>
      <Title>{playlist[0].snippet.title}</Title>
      <TeacherName>{playlist[0].snippet.channelTitle}</TeacherName>
      <Image src={playlist[0].snippet.thumbnails.standard?.url || '기본 이미지 주소'} alt="React 강의" />
      <Details>{playlist[0].snippet.description}</Details>

      <CourseList>
        <div>
          <StH2>강의 목록</StH2>
        </div>
      </CourseList>

      <List>
        {playlist.map((item) => (
          <StyledLink key={item.id} to={`/watch/${item.snippet.resourceId.videoId}`}>
            <ListItem>
              <PlayBtn src={playBtn} alt="플레이어 버튼" />
              <span>{item.snippet.title}</span>
            </ListItem>
          </StyledLink>
        ))}
      </List>

      <CourseList>
        <div>
          <StH2>강의평</StH2>
        </div>
      </CourseList>

      <div>
        {commentsInfo &&
          commentsInfo.map((comment) => (
            <EditComment
              key={comment.commentId}
              comment={comment}
              toggleDropdown={toggleDropdown}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              dropdownStates={dropdownStates}
            />
          ))}
        <CommentH2>댓글 작성</CommentH2>
        <CommentFormContainer>
          <CommentForm onSubmit={handleSubmit}>
            <StInput
              type="text"
              placeholder="내용을 입력해주세요."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <SubmitButtonWrap>
              <SubmitButton type="submit">
                <p>등록</p>
              </SubmitButton>
            </SubmitButtonWrap>
          </CommentForm>
        </CommentFormContainer>
      </div>
    </Container>
  );
};

export default Detail;
