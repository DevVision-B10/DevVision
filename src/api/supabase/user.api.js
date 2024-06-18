import supabase from '../../supabase/config';

export const findOneUser = async (column, email) => {
  const { data, error } = await supabase.from('Users').select(column).eq('email', email).single();

  if (error) {
    alert('유저를 찾지 못했습니다.');
    return null;
  }

  return data;
};

export const deleteUser = async (email) => {
  const { data, error } = await supabase.from('Users').delete().eq('email', email);

  if (error) {
    console.error(error);
    alert('계정 삭제 실패');
    return null;
  }

  return data;
};
