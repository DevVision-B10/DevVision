import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import playBtn from '../assets/playBtn.png';
import supabase from '../supabase/config';

import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPlaylist } from '../api/playlistApi';
import { EditComment } from '../components/EditComment/EditComment';
import useLogStore from '../zustand/user-log';
// 1. 코딩애플 유튜브 id
// 2. id를 이용해서 관련 목록을 가지고 올 방법이 있는지 찾아보는 것
// PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP -> 코딩애플 유튜브 채널 id -> 재생목록 리스트 [{}, {}, ...] ->

const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

const CourseList = styled.section`
  width: 100%;
  margin: 10px auto;
  height: 40px;
  border-top: 2px solid var(--lime-color);
  border-bottom: 2px solid var(--lime-color);
`;

const Details = styled.div`
  width: 100%;
  height: auto;
  font-size: 1rem;
  line-height: 32px;
  margin: 20px auto;
  text-overflow: ellipsis;
`;

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');
  const [dropdownStates, setDropdownStates] = useState({});
  const { user } = useLogStore();
  dayjs.extend(utc);
  dayjs.extend(timezone);

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
    if (!user) return alert('로그인을 해주세요.');
    const date = dayjs().tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss');

    try {
      const { data, error } = await supabase
        .from('Comments')
        .insert({
          commentId: uuidv4(),
          userId: user.id,
          playlistId: id,
          content: comments,
          createdAt: date,
          email: user.email
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

    alert('댓글 작성이 완료됐습니다!');
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleUpdate = async (commentIdToUpdate, comments) => {
    if (!user) return alert('로그인을 해주세요.');
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
    if (!user) return alert('로그인을 해주세요.');
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
    <Container className="d-flex-column">
      <h1 className="font-bigTitle">{playlist[0].snippet.title}</h1>
      <h2>{playlist[0].snippet.channelTitle}</h2>
      <img src={playlist[0].snippet.thumbnails.standard.url} alt="React 강의" />
      <Details>{playlist[0].snippet.description}</Details>

      <CourseList>
        <h2 className="font-subTitle">관련 강의 목록</h2>
      </CourseList>

      <ul className="d-flex-column">
        {playlist.map((item) => (
          <li
            className="d-flex-row border-box"
            key={item.id}
            onClick={() => navigate(`/watch/${item.snippet.resourceId.videoId}`)}
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

            <button className="btn-submit" type="submit">
              등록
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Detail;
