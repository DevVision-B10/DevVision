import styled from 'styled-components';
import YouTube from 'react-youtube';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { videoApi } from '../../api/videoApi';

const VideoSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const {
    data: video,
    isLoading,
    error
  } = useQuery({
    queryKey: ['video', id],
    queryFn: () => videoApi(id)
  });
  console.log(video);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>데이터 로드 중 오류가 발생했습니다.</div>;
  return (
    <Section>
      <SVContainer>
        <SpanContainer>
          <Span>{video[0]}</Span>
          <BackBtn onClick={() => navigate(-1)}>↩</BackBtn>
        </SpanContainer>
        <VideoContainer>
          <YouTube
            videoId={id}
            opts={{
              width: '800px',
              height: '500px'
            }}
            onReady={(e) => {
              e.target.mute();
            }}
          />
        </VideoContainer>
      </SVContainer>
    </Section>
  );
};
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const SVContainer = styled.div`
  margin-left: 30%;
  margin-top: 5%;
`;

const SpanContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Span = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const BackBtn = styled.button`
  background-color: #e7e7c7;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  width: 70%;
`;

export default VideoSection;
