import styled from 'styled-components';

export const RecentlyVideosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RecentlyVideosSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 50vw;
  height: 80vh;
`;

export const RecentlyVideosTitleWrapper = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  position: sticky;
  top: 10%;
`;

export const RecentlyVideosCardList = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const RecentlyVideosCard = styled.div`
  padding: 20px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 10px;

  p {
    margin-top: 10px;
  }
`;
