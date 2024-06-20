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
import { useEffect, useState } from 'react';

export const EditComment = ({ comment, toggleDropdown, handleUpdate, handleDelete, dropdownStates }) => {
  const [inputValue, setInputValue] = useState(comment.content);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    if (dropdownStates[comment.commentId] && isEditing === false) {
      setIsOpenDropdown(true);
    } else {
      setIsOpenDropdown(false);
    }
  }, [dropdownStates[comment.commentId], isEditing]);

  const handleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const formatCreatedAt = (createdAt) => {
    return createdAt.replace('T', ' ');
  };

  return (
    <CommentsSection key={comment.commentId}>
      <CommentHeader>
        <UserEmail>{comment.email}</UserEmail>
        <StMenuWrap>
          <CreatedAt>{formatCreatedAt(comment.createdAt)}</CreatedAt>
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
            <StEditModeBtn onClick={handleEditMode}>취소</StEditModeBtn>
          </BtnWrap>
        </>
      ) : (
        <StContent>{comment.content}</StContent>
      )}

      <DropdownMenu $isopen={isOpenDropdown}>
        <DropdownItem onClick={handleEditMode}>수정하기</DropdownItem>
        <DropdownItem onClick={() => handleDelete(comment.commentId)}>삭제하기</DropdownItem>
      </DropdownMenu>
    </CommentsSection>
  );
};
