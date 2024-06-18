import { SideBarAside, SideBarButton, SideBarImage, SideBarNav, SideBarUl, SideBarWrapper } from './SideBarStyle';

function SideBar({ user, handleOnClickSideBarCategory }) {
  const handleOnClickRecentVideos = () => {
    handleOnClickSideBarCategory('recentVideos');
  };

  const handleOnClickChart = () => {
    handleOnClickSideBarCategory('chart');
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
          <SideBarButton>회원탈퇴</SideBarButton>
        </SideBarNav>
      </SideBarWrapper>
    </SideBarAside>
  );
}

export default SideBar;
