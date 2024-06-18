import styled from 'styled-components';

export const SideBarAside = styled.aside`
  border-right: 1px solid black;
  float: left;
  position: sticky;
  width: 300px;
  height: 92vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const SideBarImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 20px;
`;

export const SideBarNav = styled.nav`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SideBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const SideBarButton = styled.button`
  margin: 10px;
  background-color: #ffffe0;
  border: none;
  padding: 15px;
  width: 100%;
  font-size: 18px;
`;
