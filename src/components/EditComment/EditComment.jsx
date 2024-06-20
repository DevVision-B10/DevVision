import {
  CommentHeader,
  CommentsSection,
  CreatedAt,
  DropdownItem,
  DropdownMenu,
  MenuButton,
  MenuImg,
  StContent,
  StMenuWrap,
  UserEmail
} from '../../pages/PlayListDetail/PlayListDetailStyle';
import threeDots from '../../assets/ellipsis-menu-icon.png';
import { useState } from 'react';
// TODO: import 위치 바꾸기

// 1. 수정하기 버튼을 클릭하면 isEditing을 true로 바꿀 것이다
// 2. isEditing이 true 면 -> p 태그를 textarea 태그로 바꾼다
// 3. 수정, 취소 버튼을 만들가
// 4. 수정을 누르면 수정되고, 취소를 누르면 isEditing이 false가 된다. -> textarea 태그를 p 태그로 바꾼다
export const EditComment = ({ comment, toggleDropdown, handleUpdate, handleDelete, dropdownStates }) => {
  const [inputValue, setInputValue] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);

  const changeToEditMode = () => {
    setIsEditing(true);
  };

  const cancelEditMode = () => {
    setIsEditing(false);
  };

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <CommentsSection CommentsSection key={comment.commentId}>
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
      {isEditing ? (
        <>
          <textarea value={inputValue} onChange={onChangeHandler} />
          <button
            onClick={() => {
              handleUpdate(comment.commentId, inputValue);
              setIsEditing(false);
            }}
          >
            수정
          </button>
          <button onClick={cancelEditMode}>취소</button>
        </>
      ) : (
        <StContent>{comment.content}</StContent>
      )}

      <DropdownMenu $isopen={dropdownStates[comment.commentId]}>
        <DropdownItem onClick={changeToEditMode}>수정하기</DropdownItem>
        <DropdownItem onClick={() => handleDelete(comment.commentId)}>삭제하기</DropdownItem>
      </DropdownMenu>
    </CommentsSection>
  );
};
