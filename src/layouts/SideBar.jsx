import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../api/supabase/user.api';
import useLogOut from '../hooks/useLogOut';
import { SideBarAside, SideBarButton, SideBarImage, SideBarNav, SideBarUl, SideBarWrapper } from './SideBarStyle';

function SideBar({ user, handleOnClickSideBarCategory }) {
  const handleLogout = useLogOut();
  const navigate = useNavigate();

  const handleOnClickRecentVideos = () => {
    handleOnClickSideBarCategory('recentVideos');
  };

  const handleOnClickChart = () => {
    handleOnClickSideBarCategory('chart');
  };

  const handleOnClickDeleteUser = async () => {
    if (confirm('정말로 계정을 삭제하시겠습니까?')) {
      deleteUser(user.email);

      handleLogout();
      navigate('/');
    } else {
      alert('계정 삭제가 취소되었습니다.');
    }
  };

  return (
    <SideBarAside>
      <SideBarWrapper>
        {user.user_metadata && user.user_metadata.avatar_url ? (
          <SideBarImage src={user.user_metadata.avatar_url} alt="profile_image" />
        ) : (
          <SideBarImage src="/src/assets/blank_profile.png" alt="default_profile_image" />
        )}
        <p>{user.email}</p>
        <SideBarNav>
          <SideBarUl>
            <li onClick={handleOnClickRecentVideos}>최근 본 영상</li>
            <li onClick={handleOnClickChart}>트렌드</li>
          </SideBarUl>
          <SideBarButton onClick={handleOnClickDeleteUser}>회원탈퇴</SideBarButton>
        </SideBarNav>
      </SideBarWrapper>
    </SideBarAside>
  );
}

export default SideBar;
