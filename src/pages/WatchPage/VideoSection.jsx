import styled from 'styled-components';
import WatchSideBar from './WatchSideBar';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const VideoSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <SVContainer>
        <SpanContainer>
          <Span>영상제목</Span>
          <BackBtn onClick={() => navigate(-1)}>↩</BackBtn>
        </SpanContainer>
        <VideoContainer>
          <YouTube
            videoId="S-urPnZysx0" //동영상 주소
            opts={{
              width: '800px',
              height: '500px',
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 0, //반복 재생
                playlist: 'S-urPnZysx0' //반복 재생으로 재생할 플레이 리스트
              }
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </VideoContainer>
      </SVContainer>
      <WatchSideBar />
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
  background-color: #e7e7c7; /* 배경 색상 설정 */
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
