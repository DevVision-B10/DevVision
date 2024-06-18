import { useEffect, useState } from 'react';
import styled from 'styled-components';
import supabase from '../../supabase/config';
import { v4 as uuidv4 } from 'uuid';
import thumbNailImg from '../../assets/react-thumbnail.jpg';
import playBtn from '../../assets/playBtn.png';
import threeDots from '../../assets/ellipsis-menu-icon.png';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [comments, setComments] = useState('');
  const [dropdownStates, setDropdownStates] = useState({});

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

  const toggleDropdown = (commentId) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [commentId]: !prevStates[commentId]
    }));
  };

  return (
    <Container>
      <Title>2022 코딩애플 리액트 강의</Title>
      <TeacherName>코딩애플</TeacherName>

      <Image src={thumbNailImg} alt="React 강의" />
      <Details>
        <p>리액트 v18, 리액트라우터 v6, reduxjs/toolkit 이런거 씁니다</p>
        <p>
          <strong>Q. 다른거 만들어보나요?</strong>
          <br />
          A. 아뇨 재활용임
        </p>
        <p>설치관련 에러 모음 https://codingapple.com/unit/react1-install-create-react-app-npx/?id=2305</p>
        <p>
          전체강의는 https://codingapple.com/course/react-basic/ / 구독자용 10% 할인코드 : YT123 (맨날 바뀜 최근영상
          참고)
        </p>
      </Details>

      <CourseList>
        <div>
          <StH2>강의 목록</StH2>
        </div>
      </CourseList>
      <List>
        <StyledLink to={`/`}>
          <ListItem>
            <PlayBtn src={playBtn} alt="플레이어 버튼" />
            <span>2022 new 리액트 1강 : 리액트 뽕주입과 설치법</span>
          </ListItem>
        </StyledLink>
        <StyledLink to={`/`}>
          <ListItem>
            <PlayBtn src={playBtn} alt="플레이어 버튼" />
            <span>2022 new 리액트 2강 : JSX 문법은 3개만 알면 된다</span>
          </ListItem>
        </StyledLink>
        <StyledLink to={`/`}>
          <ListItem>
            <PlayBtn src={playBtn} alt="플레이어 버튼" />
            <span>2022 new 리액트 3강 : state 쓰면 뭐가 좋나면</span>
          </ListItem>
        </StyledLink>
        <StyledLink to={`/`}>
          <ListItem>
            <PlayBtn src={playBtn} alt="플레이어 버튼" />
            <span>2022 new 리액트 4강 : 버튼에 지리는 기능담기</span>
          </ListItem>
        </StyledLink>
        <StyledLink to={`/`}>
          <ListItem>
            <PlayBtn src={playBtn} alt="플레이어 버튼" />
            <span>2022 new 리액트 5강 : state가 array/object면</span>
          </ListItem>
        </StyledLink>
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
                  <CreatedAt>({comment.createdAt})</CreatedAt>
                  <MenuButton onClick={() => toggleDropdown(comment.commentId)}>
                    <MenuImg src={threeDots} alt="Menu" />
                  </MenuButton>
                </StMenuWrap>
              </CommentHeader>
              <StContent>{comment.content}</StContent>
              <DropdownMenu isOpen={dropdownStates[comment.commentId]}>
                <DropdownItem onClick={() => handleUpdate(comment.commentId)}>수정</DropdownItem>
                <DropdownItem onClick={() => handleDelete(comment.commentId)}>삭제</DropdownItem>
              </DropdownMenu>
            </CommentsSection>
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
      </div>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;

const Title = styled.h1`
  margin: 30px 0px 5px;
  font-weight: 900;
  font-size: 1.8rem;
`;
const TeacherName = styled.div`
  margin: 10px 0px 20px;
  font-weight: 500;
  font-size: 1rem;
`;

const Image = styled.img`
  width: 700px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
`;

const Details = styled.div`
  width: 700px;
  height: auto;
  font-size: 1rem;
  line-height: 32px;
  margin: 20px auto;
  text-overflow: ellipsis;
`;

const CourseList = styled.section`
  width: 700px;
  margin: 10px auto;
  height: 40px;
  border-top: 2px solid rgb(95, 156, 146);
  border-bottom: 2px solid rgb(95, 156, 146);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const StH2 = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const PlayBtn = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-left: 10px;
`;

const List = styled.ul`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 700px;
  height: 70px;
  margin: 7px auto;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border: 1px solid rgb(241, 246, 246);
  border-radius: 10px;
  position: relative;
`;

const CommentHeader = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  height: 30px;
  background-color: rgb(241, 246, 246);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StContent = styled.p`
  min-height: 60px;
  padding: 10px 5px;
  font-size: 15px;
  line-height: 25px;
`;

const UserEmail = styled.div`
  display: flex;
`;

const CreatedAt = styled.div`
  margin-right: 20px;
  font-weight: 200;
  font-size: 0.6rem;
`;

const StMenuWrap = styled.div`
  display: flex;
  height: 30px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuImg = styled.img`
  color: rgb(95, 156, 146);
  cursor: pointer;
  height: 22px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 5px 0px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* 드롭다운 메뉴 토글 */
`;

const DropdownItem = styled.button`
  display: flex;
  background: none;
  border: none;
  margin: auto;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
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
