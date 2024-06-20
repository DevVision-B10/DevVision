import {
  BtnWrap,
  CommentHeader,
  CommentsSection,
  CreatedAt,
  DropdownItem,
  DropdownMenu,
  MenuButton,
  MenuImg,
  StContent,
  StEditCommentInput,
  StEditModeBtn,
  StMenuWrap,
  UserEmail
} from '../../components/EditComment/EditCommentStyle';
import threeDots from '../../assets/ellipsis-menu-icon.png';
import { useState } from 'react';

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
      {isEditing ? (
        <>
          <StEditCommentInput value={inputValue} onChange={onChangeHandler} />
          <BtnWrap>
            <StEditModeBtn
              onClick={() => {
                handleUpdate(comment.commentId, inputValue);
                setIsEditing(false);
              }}
            >
              완료
            </StEditModeBtn>
            <StEditModeBtn onClick={cancelEditMode}>취소</StEditModeBtn>
          </BtnWrap>
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
