import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo2.png';
import MypageIcon from '../assets/mypage_icon.png';
import LogIn from '../components/LogIn/LogIn';
import useLogOut from '../hooks/useLogOut';
import useModalStore from '../zustand/modal';
import useLogStore from '../zustand/user-log';

const TopMenubar = styled.div`
  background-color: var(--sub-color);
  padding: 15px;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100px;
  cursor: pointer;
`;

const IconButton = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Menubar() {
  const { isVisible, modalOpen } = useModalStore();
  const navigate = useNavigate();
  const { user } = useLogStore();
  const handleLogOut = useLogOut();

  return (
    <TopMenubar className="d-flex-row">
      {isVisible && <LogIn />}
      <LogoImg src={Logo} onClick={() => navigate('/')} />
      <ButtonContainer>
        <IconButton src={MypageIcon} onClick={() => navigate('/mypage')} />
        {user ? (
          <button className="btn-navy" onClick={handleLogOut}>
            로그아웃
          </button>
        ) : (
          <button className="btn-navy" onClick={() => modalOpen()}>
            로그인
          </button>
        )}
      </ButtonContainer>
    </TopMenubar>
  );
}

export default Menubar;
