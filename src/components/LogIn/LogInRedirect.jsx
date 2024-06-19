import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/config';
import useLogStore from '../../zustand/user-log';

function LogInRedirect() {
  const navigate = useNavigate();
  const { logIn } = useLogStore();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw new Error('세션 획득 실패');
      return data.session.user;
    };

    const getUserData = (user) => ({
      userId: user.id,
      email: user.email,
      social: user.app_metadata.provider,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      imageUrl: user.user_metadata.avatar_url
    });

    const checkUserExists = async (userId) => {
      const { data, error } = await supabase.from('Users').select('*').eq('userId', userId).single();
      if (error) throw new Error('사용자 조회 실패');
      return data;
    };

    const insertUser = async (userData) => {
      const { error } = await supabase.from('Users').insert(userData);
      if (error) throw new Error('사용자 삽입 실패');
    };

    const updateUser = async (userData) => {
      const { error } = await supabase.from('Users').update(userData).eq('userId', userData.userId);
      if (error) throw new Error('사용자 업데이트 실패');
    };

    const handleAuthCallback = async () => {
      try {
        const user = await getSession();
        const userData = getUserData(user);
        // const existingUser = await checkUserExists(userData.userId);

        // if (!existingUser) await insertUser(userData);
        // else
        await updateUser(userData);

        logIn(user);
        navigate('/');
        alert('로그인에 성공했습니다');
      } catch (error) {
        console.error(error);
        alert('로그인 처리 중 오류가 발생했습니다');
      }
    };

    handleAuthCallback();
  }, [logIn, navigate]);

  return <div>로딩중입니다...</div>;
}

export default LogInRedirect;
