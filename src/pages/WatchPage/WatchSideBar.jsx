import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WatchSideBar = () => {
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
    <Div>
      <Span>관련 동영상</Span>
      <SideBarDiv>
        <SideBarContainer id="sidebar">
          {Array.from({ length: visibleCards }).map((_, i) => (
            <Card key={i} />
          ))}
        </SideBarContainer>
      </SideBarDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 10%;
`;

const SideBarContainer = styled.div`
  background-color: green;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  background-color: white;
  height: 130px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SideBarDiv = styled.div`
  height: 700px;
  overflow-y: scroll;
`;

const Span = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export default WatchSideBar;
