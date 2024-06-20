import styled from 'styled-components';

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

export const StEditCommentInput = styled.textarea`
  height: 100px;
  resize: none;
  outline: none;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--peach-color);
  border-radius: 8px;
  font-family: 'Pretendard Variable';
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StEditModeBtn = styled.button`
  background: var(--yellow-color);
  display: block;
  float: left;
  width: 120px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: var(--black-color);
  border: none;
  border-radius: 5px;
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
`;
