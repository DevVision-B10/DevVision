import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/config';
import useLogStore from '../zustand/user-log';

const useLogOut = () => {
  const navigate = useNavigate();
  const { logOut } = useLogStore();
  const [isThrottled, setIsThrottled] = useState(false);
  const handleLogOut = async () => {
    if (isThrottled) {
      alert('로그아웃을 시도하고 있습니다');
      return;
    }

    setIsThrottled(true);
    setTimeout(() => {
      setIsThrottled(false);
    }, 3000);

    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃에 실패하였습니다!');
      return;
    }
    alert('로그아웃 되었습니다');
    logOut();
    navigate('/');
  };

  return handleLogOut;
};

export default useLogOut;
