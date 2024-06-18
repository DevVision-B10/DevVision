import styled from 'styled-components';
import LogIn from '../components/LogIn/LogIn';
import useLogOut from '../hooks/useLogOut';
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
const Button = styled.button`
  border-radius: 15px;
  border: none;
  padding: 10px;
  background-color: var(--navy-color);
  color: var(--white-color);
  cursor: pointer;
`;
function Menubar() {
  const { isVisible, modalOpen } = useModalStore();
  const { user } = useLogStore();
  const handleLogOut = useLogOut();

  return (
    <TopMenubar>
      {isVisible && <LogIn />}
      {user ? <Button onClick={handleLogOut}>로그아웃</Button> : <Button onClick={() => modalOpen()}>로그인</Button>}
    </TopMenubar>
  );
}

export default Menubar;
