import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../api/supabase/user.api';
import useLogOut from '../hooks/useLogOut';
import { SideBarAside, SideBarImage, SideBarLi, SideBarNav, SideBarWrapper } from './SideBarStyle';

function SideBar({ user, handleOnClickSideBarCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleLogout = useLogOut();
  const navigate = useNavigate();

  const handleOnClickRecentVideos = () => {
    setSelectedCategory('recentVideos');
    handleOnClickSideBarCategory('recentVideos');
  };

  const handleOnClickChart = () => {
    setSelectedCategory('chart');
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
          <SideBarLi onClick={handleOnClickRecentVideos} selected={selectedCategory === 'recentVideos'}>
            최근 본 영상
          </SideBarLi>
          <SideBarLi onClick={handleOnClickChart} selected={selectedCategory === 'chart'}>
            트렌드
          </SideBarLi>
          <SideBarLi onClick={handleOnClickDeleteUser}>회원탈퇴</SideBarLi>
        </SideBarNav>
      </SideBarWrapper>
    </SideBarAside>
  );
}

export default SideBar;
