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
  overflow: hidden; /* 스크롤이 필요할 경우를 대비하여 overflow 속성 추가 */
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
  justify-content: center; /* 가운데 정렬을 위해 수정 */
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  overflow-y: auto;
  height: 70vh; /* 카드가 너무 많아질 경우를 대비한 고정 높이 */
`;

export const RecentlyVideosCard = styled.div`
  padding: 20px;
  width: 300px; /* 카드 너비 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 10px;
  min-height: 300px; /* 카드 최소 높이 설정 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */

  p {
    margin-top: 10px;
  }

  img {
    width: 100%;
  }
`;
