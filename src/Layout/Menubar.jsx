import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo-icon.png';
import useLogOut from '../hooks/useLogOut';
import useModalStore from '../zustand/modal';
import useLogStore from '../zustand/user-log';

const TopMenubar = styled.div`
  background-color: var(--sub-color);
  padding: 0 15px 0 15px;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100px;
  cursor: pointer;
`;

function Menubar() {
  const { user } = useLogStore();
  const navigate = useNavigate();
  const handleLogOut = useLogOut();
  const { modalOpen } = useModalStore();
  const handleGoMypage = () => {
    if (user) navigate('/mypage');
    else {
      alert('로그인이 필요한 서비스입니다!');
      navigate('*');
    }
  };
  return (
    <TopMenubar className="d-flex-row">
      <LogoImg src={Logo} onClick={() => navigate('/')} />
      {user ? (
        <div className="d-flex-row">
          <button className="btn-navy" onClick={handleGoMypage}>
            마이페이지
          </button>
          <button className="btn-navy" onClick={handleLogOut}>
            로그아웃
          </button>
        </div>
      ) : (
        <button className="btn-navy" onClick={() => modalOpen()}>
          로그인
        </button>
      )}
    </TopMenubar>
  );
}

export default Menubar;
