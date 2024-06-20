import { useParams } from 'react-router-dom';
import { Iframe, VideoContainer } from './VideoPageStyle';

const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <VideoContainer>
      <Iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
    </VideoContainer>
  );
};

export default VideoPage;
