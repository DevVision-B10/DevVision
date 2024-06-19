import { useEffect, useState } from 'react';
import supabase from '../../supabase/config';
import { v4 as uuidv4 } from 'uuid';
import playBtn from '../../assets/playBtn.png';
import threeDots from '../../assets/ellipsis-menu-icon.png';
import {
  CommentForm,
  CommentFormContainer,
  CommentH2,
  CommentHeader,
  CommentsSection,
  Container,
  CourseList,
  CreatedAt,
  Details,
  DropdownItem,
  DropdownMenu,
  Image,
  List,
  ListItem,
  MenuButton,
  MenuImg,
  PlayBtn,
  StContent,
  StH2,
  StInput,
  StMenuWrap,
  StyledLink,
  SubmitButton,
  SubmitButtonWrap,
  TeacherName,
  Title,
  UserEmail
} from './PlayListDetailStyle';

import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../api/playlistApi';
import { useParams } from 'react-router-dom';
import useLogStore from '../../zustand/user-log';

// 1. 코딩애플 유튜브 id
// 2. id를 이용해서 관련 목록을 가지고 올 방법이 있는지 찾아보는 것
// PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP -> 코딩애플 유튜브 채널 id -> 재생목록 리스트 [{}, {}, ...] ->

const Detail = () => {
  const { id } = useParams();
  // console.log(params.id);
  // const params = { id: 'PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP' };
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');
  const [dropdownStates, setDropdownStates] = useState({});
  const { user } = useLogStore();

  useEffect(() => {
    const fetchComments = async () => {
      const { data: Comments, error } = await supabase.from('Comments').select('*');
      if (error) {
        console.error(error);
        alert('supabase에서 데이터를 가져오는 중 오류가 발생했습니다.');
        return;
      }
      setCommentsInfo(Comments);
    };
    fetchComments();
  }, []);

  const {
    data: playlist,
    isLoading,
    error
  } = useQuery({
    queryKey: ['test', id],
    queryFn: () => fetchApi(id)
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

  const handleUpdate = async (commentIdToUpdate) => {
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
      <Image src={playlist[0].snippet.thumbnails.standard.url} alt="React 강의" />
      <Details>{playlist[0].snippet.description}</Details>

      <CourseList>
        <div>
          <StH2>관련 강의 목록</StH2>
        </div>
      </CourseList>

      <List>
        {playlist.map((item) => (
          <StyledLink key={item.id}>
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
            <CommentsSection key={comment.commentId}>
              <CommentHeader>
                {/* userId 대신 user.email */}
                <UserEmail>{comment.userId}</UserEmail>
                <StMenuWrap>
                  <CreatedAt>({comment.createdAt.slice(0, 10)})</CreatedAt>
                  <MenuButton onClick={() => toggleDropdown(comment.commentId)}>
                    <MenuImg src={threeDots} alt="Menu" />
                  </MenuButton>
                </StMenuWrap>
              </CommentHeader>
              <StContent>{comment.content}</StContent>
              <DropdownMenu $isopen={dropdownStates[comment.commentId]}>
                <DropdownItem onClick={() => handleUpdate(comment.commentId)}>수정하기</DropdownItem>
                <DropdownItem onClick={() => handleDelete(comment.commentId)}>삭제하기</DropdownItem>
              </DropdownMenu>
            </CommentsSection>
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
