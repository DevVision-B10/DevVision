import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Iframe = styled.iframe`
  width: 80%;
  height: 80%;
  border: none;
`;

const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <VideoContainer>
      <Iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
    </VideoContainer>
  );
};

export default VideoPage;
