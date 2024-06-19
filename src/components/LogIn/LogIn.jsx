import GithubIcon from '../../assets/github-icon.png';
import GoogleIcon from '../../assets/google-icon.png';
import KakaoIcon from '../../assets/kakao-icon.png';
import Logo from '../../assets/logo-icon.png';
import supabase from '../../supabase/config';
import BackModal from '../BackModal/BackModal';

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
      <div className="modal d-flex-column" onClick={(e) => e.stopPropagation()}>
        <img src={Logo} width={'150px'} />
        <h1 className="font-title">로그인할 계정을 선택해주세요</h1>
        <button className="d-flex-row btn-dashed" onClick={() => handleLogIn('kakao')}>
          <img src={KakaoIcon} width={'25px'} />
          카카오톡으로 로그인하기
        </button>
        <button className="d-flex-row btn-dashed" onClick={() => handleLogIn('github')}>
          <img src={GithubIcon} width={'25px'} />
          깃허브로 로그인하기
        </button>
        <button className="d-flex-row btn-dashed" onClick={() => handleLogIn('google')}>
          <img src={GoogleIcon} width={'25px'} />
          구글로 로그인하기
        </button>
      </div>
    </BackModal>
  );
}

export default LogIn;
