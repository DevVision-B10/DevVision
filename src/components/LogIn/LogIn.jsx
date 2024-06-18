import styled from 'styled-components';
import GithubIcon from '../../assets/github-icon.png';
import GoogleIcon from '../../assets/google-icon.png';
import KakaoIcon from '../../assets/kakao-icon.png';
import Logo from '../../assets/logo-icon.png';
import supabase from '../../supabase/config';
import BackModal from '../BackModal/BackModal';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  width: 100%;
  border-radius: 15px;
  border: 1px dashed black;
  padding: 15px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const FrontModal = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #ffffe0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

function LogIn() {
  const handleLogIn = async (logInType) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: logInType,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
    } catch (error) {
      alert('로그인페이지로 가는 도중에 문제가 생겼습니다');
    }
  };

  return (
    <BackModal>
      <FrontModal onClick={(e) => e.stopPropagation()}>
        <img src={Logo} width={'150px'} />
        <Title>로그인할 계정을 선택해주세요</Title>
        <Button onClick={() => handleLogIn('kakao')}>
          <img src={KakaoIcon} width={'25px'} />
          카카오톡으로 로그인하기
        </Button>
        <Button onClick={() => handleLogIn('github')}>
          <img src={GithubIcon} width={'25px'} />
          깃허브로 로그인하기
        </Button>
        <Button onClick={() => handleLogIn('google')}>
          <img src={GoogleIcon} width={'25px'} />
          구글로 로그인하기
        </Button>
      </FrontModal>
    </BackModal>
  );
}

export default LogIn;
