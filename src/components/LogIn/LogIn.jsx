import { signInOAuth } from '../../api/supabase/user.api';
import GithubIcon from '../../assets/github-icon.png';
import GoogleIcon from '../../assets/google-icon.png';
import KakaoIcon from '../../assets/kakao-icon.png';
import Logo from '../../assets/logo-icon.png';
import BackModal from '../BackModal/BackModal';

function LogIn() {
  return (
    <BackModal>
      <div className="modal d-flex-column" onClick={(e) => e.stopPropagation()}>
        <img src={Logo} width={'150px'} />
        <h1 className="font-title">로그인할 계정을 선택해주세요</h1>
        <button className="d-flex-row btn-dashed" onClick={() => signInOAuth('kakao')}>
          <img src={KakaoIcon} width={'25px'} />
          카카오톡으로 로그인하기
        </button>
        <button className="d-flex-row btn-dashed" onClick={() => signInOAuth('github')}>
          <img src={GithubIcon} width={'25px'} />
          깃허브로 로그인하기
        </button>
        <button className="d-flex-row btn-dashed" onClick={() => signInOAuth('google')}>
          <img src={GoogleIcon} width={'25px'} />
          구글로 로그인하기
        </button>
      </div>
    </BackModal>
  );
}

export default LogIn;
