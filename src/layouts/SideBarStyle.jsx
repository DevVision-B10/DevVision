import styled, { css } from 'styled-components';

export const SideBarAside = styled.aside`
  border-right: 1px solid #d9d9d9;
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

export const SideBarLi = styled.div`
  width: 100%;
  padding: 20px;
  cursor: pointer;
  font-size: 18px;
  ${(props) =>
    props.selected &&
    css`
      background-color: var(--sub-color);
    `}

  &:hover {
    background-color: var(--sub-color);
  }
`;
