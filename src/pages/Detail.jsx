import { useEffect, useState } from 'react';
import styled from 'styled-components';
import supabase from '../supabase/config';
import { v4 as uuidv4 } from 'uuid';

const Detail = () => {
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const { data: Comments, error } = await supabase.from('Comments').select('*');
      if (error) {
        console.error(error);
        return;
      }
      setCommentsInfo(Comments);
      console.log('Comments', Comments);
    };
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comments) return alert('댓글 내용을 입력해주세요');

    try {
      const { data, error } = await supabase
        .from('Comments')
        .insert({
          commentId: uuidv4(),
          userId: 'd0b1f507-4ef7-4f4a-97d1-5a0a83bf1a4d',
          videoId: '370c93de-75aa-4a1d-b08c-1e0e2c7b1926',
          content: comments,
          createdAt: new Date().toISOString()
        })
        .select();

      if (error) {
        console.error('댓글 삽입 중 오류 발생:', error);
        return;
      }
      // data가 iterable인지 확인
      if (Array.isArray(data)) {
        setCommentsInfo((prevComments) => [...prevComments, ...data]);
        setComments('');
      } else {
        console.error('예상하지 못한 데이터 형식:', data);
      }
    } catch (err) {
      console.error('오류 발생:', err);
    }
  };

  const handleUpdate = async (commentIdToUpdate) => {
    const { error } = await supabase.from('Comments').update({ content: comments }).eq('commentId', commentIdToUpdate);
    if (error) {
      console.error('댓글 수정 중 오류 발생:', error);
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
        return;
      }
      setCommentsInfo((currentComments) =>
        currentComments.filter((comment) => comment.commentId !== commentIdToDelete)
      );
    }
  };

  return (
    <Container>
      <Header>
        <Title>2022 코딩애플 리액트 강의</Title>
      </Header>

      <IntroSection>
        <Image src="https://via.placeholder.com/600x200" alt="React 강의" />
        <Details>
          <p>리액트 v18, 리액트라우터 v6, reduxjs/toolkit 이런거 씁니다</p>
          <p>
            <strong>Q. 다른거 만들어보나요?</strong>
            <br />
            A. 아뇨 재활용임
          </p>
          <p>
            설치관련 에러 모음{' '}
            <a href="https://codingapple.com/unit/react1-install-create-react-app-npx/?id=2305">링크</a>
          </p>
          <p>
            전체강의는 <a href="https://codingapple.com/course/react-basic/">링크</a> / 구독자용 10% 할인코드 : YT123
          </p>
        </Details>
      </IntroSection>

      <CourseList>
        <h2>강의 목록</h2>
        <List>
          <ListItem>2022 new 리액트 1강 : 리액트 뽕주입과 설치법</ListItem>
          <ListItem>2022 new 리액트 2강 : JSX 문법은 3개만 알면 된다</ListItem>
          <ListItem>2022 new 리액트 3강 : state 쓰면 뭐가 좋나면</ListItem>
          <ListItem>2022 new 리액트 4강 : 버튼에 지리는 기능담기</ListItem>
          <ListItem>2022 new 리액트 5강 : state가 array/object면</ListItem>
        </List>
      </CourseList>

      <CommentsSection>
        <h2>댓글</h2>
        {commentsInfo &&
          commentsInfo.map((comment) => (
            <Comment key={comment.commentId}>
              <CommentHeader>
                {/* userId 대신 user.email */}
                {comment.userId} ({comment.createdAt})
              </CommentHeader>
              <p>{comment.content}</p>
              <button onClick={() => handleUpdate(comment.commentId)}>수정</button>
              <button onClick={() => handleDelete(comment.commentId)}>삭제</button>
            </Comment>
          ))}
        <CommentForm onSubmit={handleSubmit}>
          <StInput
            type="text"
            placeholder="댓글을 입력해주세요"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <SubmitButton type="submit">작성</SubmitButton>
        </CommentForm>
      </CommentsSection>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;

const Header = styled.header`
  background-color: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  margin: 0;
`;

const IntroSection = styled.section`
  display: flex;
  margin: 20px 0;
`;

const Image = styled.img`
  max-width: 600px;
`;

const Details = styled.div`
  margin-left: 20px;
`;

const CourseList = styled.section`
  margin: 20px 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const CommentsSection = styled.section`
  margin: 20px 0;
`;

const Comment = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const CommentHeader = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
