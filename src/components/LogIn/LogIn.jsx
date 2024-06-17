import styled from 'styled-components';
import supabase from '../../supabase/config';
import BackModal from '../BackModal/BackModal';

const Button = styled.button`
  background-color: white;
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
  gap: 15px;
  background-color: #ffffe0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

function LogIn() {
  const handleLogIn = async (logInType) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: logInType,
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });
    } catch (error) {
      alert('로그인페이지로 가는 도중에 문제가 생겼습니다');
      return;
    }
  };

  return (
    <BackModal>
      <FrontModal onClick={(e) => e.stopPropagation()}>
        <Title>로그인할 계정을 선택해주세요</Title>
        <Button onClick={() => handleLogIn('kakao')}>카카오톡으로 로그인하기</Button>
        <Button onClick={() => handleLogIn('github')}>깃허브로 로그인하기</Button>
        <Button onClick={() => handleLogIn('google')}>구글로 로그인하기</Button>
      </FrontModal>
    </BackModal>
  );
}

export default LogIn;
