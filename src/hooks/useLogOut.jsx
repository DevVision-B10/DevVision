import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../api/supabase/user.api';
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

    await signOut();
    alert('로그아웃 되었습니다');
    logOut();
    navigate('/');
  };

  return handleLogOut;
};

export default useLogOut;
