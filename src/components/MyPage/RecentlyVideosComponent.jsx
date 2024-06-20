import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findOneUser } from '../../api/supabase/user.api';
import { getVideoData } from '../../api/youtube/youtube.api';
import {
  RecentlyVideosCard,
  RecentlyVideosCardList,
  RecentlyVideosSection,
  RecentlyVideosTitleWrapper,
  RecentlyVideosWrapper
} from './RecentlyVideosComponentStyle';

function RecentlyVideosComponent({ user }) {
  const [recentVideos, setRecentVideos] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRecentVideoData = async () => {
      if (user && user.email) {
        const column = 'recentVideo';
        const findUser = await findOneUser(column, user.email);

        const recentData = JSON.parse(findUser.recentVideo || '[]');
        setRecentVideos(recentData);
      }
    };

    if (user && user.email) {
      getRecentVideoData();
    }
  }, [user]);

  const {
    data: videoDataResponse,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['recentVideos'],
    queryFn: async () => {
      if (recentVideos.length === 0) {
        return [];
      }

      const videoIds = recentVideos.join(',');
      return await getVideoData('videos', {
        part: 'snippet',
        id: videoIds
      });
    },
    enabled: recentVideos.length > 0
  });

  useEffect(() => {
    if (videoDataResponse) {
      setVideoData(videoDataResponse);
    }
  }, [videoDataResponse]);

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  const handleOnClickCard = (videoId) => {
    navigate(`/detail/${videoId}`);
  };

  return (
    <RecentlyVideosWrapper>
      <RecentlyVideosSection>
        <RecentlyVideosTitleWrapper>
          <h1>최근 본 영상</h1>
        </RecentlyVideosTitleWrapper>
        <RecentlyVideosCardList>
          {videoData.length > 0
            ? videoData.map((video) => (
                <RecentlyVideosCard key={video.id} onClick={() => handleOnClickCard(video.id)}>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                  <p>{video.snippet.title}</p>
                </RecentlyVideosCard>
              ))
            : '최근 본 영상이 존재하지 않습니다.'}
        </RecentlyVideosCardList>
      </RecentlyVideosSection>
    </RecentlyVideosWrapper>
  );
}

export default RecentlyVideosComponent;
