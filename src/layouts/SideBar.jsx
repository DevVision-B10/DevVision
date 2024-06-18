import { SideBarAside, SideBarButton, SideBarImage, SideBarNav, SideBarUl, SideBarWrapper } from './SideBarStyle';

function SideBar({ user }) {
  return (
    <SideBarAside>
      <SideBarWrapper>
        <SideBarImage src="/src/assets/pikachu.png" alt="pikachu" />
        <p>{user.email}</p>
        <SideBarNav>
          <SideBarUl>
            <li>최근 본 영상</li>
            <li>트렌드</li>
          </SideBarUl>
          <SideBarButton>회원탈퇴</SideBarButton>
        </SideBarNav>
      </SideBarWrapper>
    </SideBarAside>
  );
}

export default SideBar;
