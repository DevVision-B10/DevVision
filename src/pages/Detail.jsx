import styled from 'styled-components';

const Detail = () => {
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
          <ListItem>2022 new 리액트 1강 : 리액트 뿌주입과 설치법</ListItem>
          <ListItem>2022 new 리액트 2강 : JSX 문법은 3개만 알면 된다</ListItem>
          <ListItem>2022 new 리액트 3강 : state 쓰면 뭐가 좋나면</ListItem>
          <ListItem>2022 new 리액트 4강 : 버튼에 지리는 기능담기</ListItem>
          <ListItem>2022 new 리액트 5강 : state가 array/object면</ListItem>
        </List>
      </CourseList>

      <CommentsSection>
        <h2>댓글</h2>
        <Comment>
          <CommentHeader>멜론 머스크 (2024-01-01 01:01)</CommentHeader>
          <p>역시 믿고 보는 코딩애플 강의 지루하지가 않음 ㅋㅋㅋㅋ 이거 보고 화성 갈끄니까~</p>
        </Comment>
        <Comment>
          <CommentHeader>마크 주겨버그 (2024-01-01 01:02)</CommentHeader>
          <p>리액트 영상 고맙습니다. 근데 최신 업데이트가 안 올라와서 별 하나 뺐습니다.</p>
        </Comment>
        <CommentForm>
          <TextArea placeholder="내용을 입력해주세요" />
          <SubmitButton type="submit">작성</SubmitButton>
        </CommentForm>
      </CommentsSection>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
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

const TextArea = styled.textarea`
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
