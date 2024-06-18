import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/config';
import useLogStore from '../../zustand/user-log';

function LogInRedirect() {
  const navigate = useNavigate();
  const { logIn } = useLogStore();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data } = await supabase.auth.getSession();
      const userData = {
        userId: data.session.user.id,
        email: data.session.user.email,
        social: data.session.user.app_metadata.provider,
        createdAt: data.session.user.created_at,
        updatedAt: data.session.user.updated_at,
        imageUrl: data.session.user.user_metadata.avatar_url
      };
      const response = await supabase.from('Users').select('*').eq('userId', userData.userId);

      if (!response.data) {
        await supabase.from('Users').insert(userData);
      } else {
        await supabase.from('Users').update(userData).eq('userId', userData.userId);
      }
      logIn(data.session.user);

      navigate('/');
      alert('로그인에 성공했습니다');
    };

    handleAuthCallback();
  }, [logIn, navigate]);

  return <div>로딩중입니다...</div>;
}

export default LogInRedirect;
