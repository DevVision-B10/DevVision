import styled from 'styled-components';

export const HighBtn = styled.button`
  position: fixed;
  bottom: 5px;
  right: 5px;
  border: none;
  border-radius: 40px;
  background-color: var(--yellow-color);
  padding: 5px;
`;
export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Footer = styled.div`
  width: 100%;
  text-align: center;
`;
export const Search = styled.div`
  position: relative;
  max-width: 400px;
  margin: 40px auto 20px auto;
  text-align: center;
`;
export const SearchBtn = styled.img`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 20px;
`;
export const SearchInput = styled.input`
  width: 90%;
`;
