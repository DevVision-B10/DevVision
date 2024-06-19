import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
  const totalCards = 20;
  const initialCards = 6;
  const [visibleCards, setVisibleCards] = useState(initialCards);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleCards((prev) => Math.min(prev + 1, totalCards));
    }
  };

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('scroll', handleScroll);
    return () => sidebar.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <SideBarContainer id="sidebar">
      {Array.from({ length: visibleCards }).map((_, i) => (
        <Card key={i} />
      ))}
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 10%;
  background-color: green;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  overflow-y: auto;
`;

const Card = styled.div`
  background-color: white;
  height: 130px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default SideBar;
