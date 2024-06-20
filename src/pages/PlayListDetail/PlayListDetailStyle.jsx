import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;

export const Title = styled.h1`
  margin: 30px 0px 5px;
  font-weight: 900;
  font-size: 1.8rem;
`;
export const TeacherName = styled.div`
  margin: 10px 0px 20px;
  font-weight: 500;
  font-size: 1rem;
`;

export const Image = styled.img`
  width: 700px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
`;

export const Details = styled.div`
  width: 700px;
  height: auto;
  font-size: 1rem;
  line-height: 32px;
  margin: 20px auto;
  text-overflow: ellipsis;
`;

export const CourseList = styled.section`
  width: 700px;
  margin: 10px auto;
  height: 40px;
  border-top: 2px solid var(--lime-color);
  border-bottom: 2px solid var(--lime-color);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const StH2 = styled.h2`
  font-weight: 700;
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const PlayBtn = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const List = styled.ul`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  width: 700px;
  height: 70px;
  margin: 7px auto;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StCommentInput = styled.textarea`
  height: 100px;
  resize: none;
  outline: none;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--peach-color);
  border-radius: 8px;
  font-family: 'Pretendard Variable';
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  background: var(--yellow-color);
  display: block;
  color: var(--black-color);
  margin: auto;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: 0px 5px 0px 0px #a66615; /* 기본 상태에서 box-shadow 있음 */

  &:hover {
    transform: translateY(5px);
    box-shadow: none; /* 커서를 갖다 댈 때 box-shadow 없음 */
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5); /* 눌렀을 때의 box-shadow 효과 */
    position: relative;
    top: 2px;
  }

  p {
    font-weight: 600;
  }
`;

export const CommentH2 = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;
`;

export const SubmitButtonWrap = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 10px;
`;
