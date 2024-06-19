import { useState } from 'react';
import styled from 'styled-components';
import MainBanner from './MainBanner';
import CourseGrid from './CourseGrid';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SearchBar = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 15px;
  border: none;
  background-color: var(--navy-color);
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: var(--darknavy-color);
    transition: all 0.3s;
  }
`;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('검색어:', searchQuery);
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <MainBanner />
      <SearchContainer>
        <SearchBar type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
        <SearchButton onClick={handleSearchClick}>검색</SearchButton>
      </SearchContainer>
      <CourseGrid searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
