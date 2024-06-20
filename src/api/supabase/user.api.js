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

export const signInOAuth = async (logInType) => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: logInType,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  } catch (error) {
    alert('로그인페이지로 가는 도중에 문제가 생겼습니다');
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃에 실패하였습니다!');
      return;
    }

    return;
  } catch (err) {
    console.error(err);
    alert('오류가 발생했습니다.');
  }
};

export const updateInsertUserData = async (data) => {
  try {
    const { error } = await supabase.from('Users').upsert(data, { onConflict: ['email'] });

    if (error) {
      console.error(error);
      alert('오류가 발생했습니다.');
    }

    return;
  } catch (err) {
    console.error(err);
    alert('오류가 발생했습니다.');
  }
};
