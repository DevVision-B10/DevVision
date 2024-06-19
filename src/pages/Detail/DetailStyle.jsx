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

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border: 1px solid #f1f6f6;
  border-radius: 10px;
  position: relative;
`;

export const CommentHeader = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  height: 30px;
  background-color: var(--yellow-color);
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

export const StContent = styled.p`
  min-height: 60px;
  padding: 10px 5px;
  font-size: 15px;
  line-height: 25px;
`;

export const UserEmail = styled.div`
  display: flex;
`;

export const CreatedAt = styled.div`
  margin-right: 20px;
  font-weight: 200;
  font-size: 0.6rem;
`;

export const StMenuWrap = styled.div`
  display: flex;
  height: 30px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuImg = styled.img`
  cursor: pointer;
  height: 22px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  background-color: var(--white-color);
  box-shadow: 0 2px 10px var(--black-color);
  border-radius: 10px;
  padding: 5px 0px;
  display: ${({ $isopen }) => ($isopen ? 'block' : 'none')}; /* 드롭다운 메뉴 토글 */
`;

export const DropdownItem = styled.button`
  display: flex;
  background: none;
  border: none;
  margin: auto;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StInput = styled.textarea`
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
  color: rgb(34, 34, 34);
  margin: auto;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: transparent;

  p {
    font-weight: 600;
  }

  &:hover {
    background-color: var(--yellow-color);
    transition: background-color 0.3s ease-in-out 0s;
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
