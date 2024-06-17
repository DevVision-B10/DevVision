import styled from 'styled-components';

function SideBar() {
  return (
    <SideBarAside>
      <SideBarWrapper>
        <SideBarImage src="/src/assets/pikachu.png" alt="pikachu" />
        <p>피카츄</p>
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

const SideBarAside = styled.aside`
  border-right: 1px solid black;
  float: left;
  position: sticky;
  width: 25vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideBarWrapper = styled.div`
  width: 100%;
  text-align: center;
  & > p {
    font-size: 30px;
    padding-bottom: 30px;
  }
`;

const SideBarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 20px;
`;

const SideBarNav = styled.nav`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
  }
`;

const SideBarButton = styled.button`
  margin: 10px;
  background-color: #ffffe0;
  border: none;
  padding: 20px;
  width: 100%;
  font-size: 20px;
`;
