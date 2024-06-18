import styled from 'styled-components';
import LogIn from '../components/LogIn/LogIn';
import supabase from '../supabase/config';
import useModalStore from '../zustand/modal';
import useLogStore from '../zustand/user-log';

const TopMenubar = styled.div`
  background-color: var(--sub-color);
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
`;
function Menubar() {
  const { isVisible, modalOpen } = useModalStore();
  const { user, logOut } = useLogStore();
  const handleLogOut = async () => {
    try {
      const response = await supabase.auth.signOut();
      console.log(response);
      logOut();
    } catch (error) {
      alert('로그아웃에 실패하였습니다!');
    }
  };
  return (
    <TopMenubar>
      {isVisible && <LogIn />}
      {user ? <button onClick={handleLogOut}>로그아웃</button> : <button onClick={() => modalOpen()}>로그인</button>}
    </TopMenubar>
  );
}

export default Menubar;
