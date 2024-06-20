import { useEffect, useState } from 'react';
import playBtn from '../../assets/playBtn.png';

import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { createComment, deleteComment, findAllComment, updateComment } from '../../api/supabase/comment.api';
import { updateInsertUserData } from '../../api/supabase/user.api';
import { getVideoData } from '../../api/youtube/youtube.api';
import { EditComment } from '../../components/EditComment/EditComment';
import { date } from '../../utils/common/date';
import useRecentVideoStore from '../../zustand/recent-video';
import useLogStore from '../../zustand/user-log';
import { Container, CourseList, Details, SubmitButton, SubmitButtonWrap } from './PlayListDetailStyle';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');
  const [dropdownStates, setDropdownStates] = useState({});
  const { user } = useLogStore();
  const addRecentVideo = useRecentVideoStore((state) => state.addRecentVideo);
  const initializeRecentVideos = useRecentVideoStore((state) => state.initializeRecentVideos);

  useEffect(() => {
    const fetchComments = async () => {
      const Comments = await findAllComment(id);
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
    queryFn: () =>
      getVideoData('playlistItems', {
        part: 'snippet',
        playlistId: id
      })
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comments.trim()) return alert('댓글 내용을 입력해주세요');
    if (!user) return alert('로그인을 해주세요.');

    const data = await createComment(user, comments, id);

    setCommentsInfo((prevComments) => [...prevComments, ...data]);
    setComments('');

    alert('댓글 작성이 완료됐습니다!');
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleUpdate = async (commentIdToUpdate, comments) => {
    if (!user) return alert('로그인을 해주세요.');

    await updateComment(comments, commentIdToUpdate);

    setCommentsInfo((currentComments) =>
      currentComments.map((comment) =>
        comment.commentId === commentIdToUpdate ? { ...comment, content: comments } : comment
      )
    );
    setComments('');
  };

  const handleDelete = async (commentIdToDelete) => {
    if (!user) return alert('로그인을 해주세요.');
    const confirmed = confirm('정말로 댓글을 삭제하시겠습니까?');
    if (confirmed) {
      await deleteComment(commentIdToDelete);

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

  const handleOnClickCard = async (videoId) => {
    if (user) {
      const { email } = user;
      await initializeRecentVideos(email);
      await addRecentVideo(videoId);

      const updateRecent = useRecentVideoStore.getState().recent;

      const recentString = JSON.stringify(updateRecent);
      const updateUserData = {
        email,
        recentVideo: recentString,
        social: user.app_metadata.provider,
        createdAt: date,
        updatedAt: date
      };

      updateInsertUserData(updateUserData);
    }

    navigate(`/watch/${videoId}`);
  };

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>데이터 로드 중 오류가 발생했습니다.</div>;

  if (!playlist || playlist.length === 0) return <div>유효한 데이터가 없습니다.</div>;

  return (
    <Container className="d-flex-column">
      <h1 className="font-bigTitle">{playlist[0].snippet.title}</h1>
      <h2>{playlist[0].snippet.channelTitle}</h2>
      <img src={playlist[0].snippet.thumbnails.standard?.url} alt="React 강의" />
      <Details>{playlist[0].snippet.description}</Details>

      <CourseList>
        <h2 className="font-subTitle">관련 강의 목록</h2>
      </CourseList>

      <ul className="d-flex-column">
        {playlist.map((item) => (
          <li
            className="d-flex-row border-box"
            key={item.id}
            onClick={() => handleOnClickCard(item.snippet.resourceId.videoId)}
          >
            <img src={playBtn} alt="플레이어 버튼" height="18px" />
            <span>{item.snippet.title}</span>
          </li>
        ))}
      </ul>

      <CourseList>
        <h2 className="font-subTitle">강의평</h2>
      </CourseList>

      <div className="d-flex-column">
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
        <h2 className="font-subTitle">댓글 작성</h2>

        <form onSubmit={handleSubmit}>
          <div className="d-flex-column border-box">
            <textarea
              type="text"
              placeholder="내용을 입력해주세요."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              onKeyDown={activeEnter}
            />

            <SubmitButtonWrap>
              <SubmitButton type="submit">
                <p>등록</p>
              </SubmitButton>
            </SubmitButtonWrap>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Detail;
