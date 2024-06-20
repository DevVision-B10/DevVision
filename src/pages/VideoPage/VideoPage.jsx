import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { getVideoData } from '../../api/youtube/youtube.api';
import { StEditModeBtn } from '../../components/EditComment/EditCommentStyle';
import { VideoContainer, VideoTitle, VideoTitleWrapper } from './VideoPageStyle';

const VideoPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const {
    data: video,
    isLoading,
    error
  } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () =>
      getVideoData('videos', {
        part: 'snippet',
        id: videoId
      })
  });

  if (isLoading) return 'loading';

  if (error) return '데이터 로드 중 오류 발생';

  console.log(video);
  return (
    <VideoContainer>
      <VideoTitleWrapper>
        <VideoTitle>{video[0].snippet.title}</VideoTitle>
        <StEditModeBtn onClick={() => navigate(-1)}>뒤로가기</StEditModeBtn>
      </VideoTitleWrapper>
      <YouTube videoId={videoId} opts={{ width: '800px', height: '500px' }} />
    </VideoContainer>
  );
};

export default VideoPage;
