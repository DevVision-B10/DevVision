import { v4 as uuid } from 'uuid';
import supabase from '../../supabase/config';
import { date } from '../../utils/common/date.js';

export const findAllComment = async (id) => {
  const { data, error } = await supabase.from('Comments').select('*').eq('playlistId', id);
  if (error) {
    console.error(error);
    alert('supabase에서 데이터를 가져오는 중 오류가 발생했습니다.');
    return;
  }
  return data;
};

export const createComment = async (user, comments, playlistId) => {
  try {
    const { data, error } = await supabase
      .from('Comments')
      .insert({
        commentId: uuid(),
        userId: user.id,
        playlistId,
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
    return data;
  } catch (err) {
    console.error('오류발생: ', err);
    alert('오류가 발생했습니다.');
  }
};

export const updateComment = async (comments, commentIdToUpdate) => {
  const { error } = await supabase.from('Comments').update({ content: comments }).eq('commentId', commentIdToUpdate);
  if (error) {
    console.error('댓글 수정 중 오류 발생:', error);
    alert('댓글 수정 중 오류가 발생했습니다.');
    return;
  } else {
    alert('댓글이 수정되었습니다!');
  }
};

export const deleteComment = async (commentIdToDelete) => {
  const { error } = await supabase.from('Comments').delete().eq('commentId', commentIdToDelete).select();
  if (error) {
    console.error('댓글 삭제 중 오류 발생:', error);
    alert('댓글 삭제 중 오류가 발생했습니다.');
    return;
  }
};
