import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/config';
import useLogStore from '../zustand/user-log';

const useLogOut = () => {
  const navigate = useNavigate();
  const { logOut } = useLogStore();

  const handleLogOut = async () => {
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
