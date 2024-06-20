import styled from 'styled-components';

export const RecentlyVideosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
`;

export const RecentlyVideosSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 50vw;
  height: 80vh;
  overflow: hidden;
`;

export const RecentlyVideosTitleWrapper = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  position: sticky;
  top: 0%;
`;

export const RecentlyVideosCardList = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  overflow-y: auto;
  height: 70vh;
`;

export const RecentlyVideosCard = styled.div`
  padding: 20px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 10px;
  min-height: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  p {
    margin-top: 10px;
  }

  img {
    width: 100%;
  }
`;
