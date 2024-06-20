import { useParams } from 'react-router-dom';
import { Iframe, VideoContainer } from './VideoPageStyle';

const VideoPage = () => {
  const { videoId } = useParams();

  // https://www.youtube.com/embed/jZ-zf4oWmmw

  return (
    <VideoContainer>
      <Iframe src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen />
    </VideoContainer>
  );
};

export default VideoPage;
