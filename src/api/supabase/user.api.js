import supabase from '../../supabase/config';

export const findOneUser = async (column, email) => {
  const { data, error } = await supabase.from('Users').select(column).eq('email', email).single();

  if (error) {
    alert('유저를 찾지 못했습니다.');
    return null;
  }

  return data;
};
