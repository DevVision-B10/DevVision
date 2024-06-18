import styled from 'styled-components';

export const SideBarAside = styled.aside`
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

export const SideBarWrapper = styled.div`
  width: 100%;
  text-align: center;
  & > p {
    font-size: 30px;
    padding-bottom: 30px;
  }
`;

export const SideBarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 20px;
`;

export const SideBarNav = styled.nav`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const SideBarButton = styled.button`
  margin: 10px;
  background-color: #ffffe0;
  border: none;
  padding: 20px;
  width: 100%;
  font-size: 20px;
`;
