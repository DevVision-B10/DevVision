import supabase from '../supabase/config';
import useLogStore from '../zustand/user-log';

const useLogOut = () => {
  const { logOut } = useLogStore();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('로그아웃에 실패하였습니다!');
      return;
    }
    logOut();
  };

  return handleLogOut;
};

export default useLogOut;
