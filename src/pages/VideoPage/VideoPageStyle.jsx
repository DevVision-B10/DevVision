import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-width: 800px;
  width: 70vw;
  margin: 0 auto;
`;

export const VideoTitleWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 800px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

export const VideoTitle = styled.div`
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
