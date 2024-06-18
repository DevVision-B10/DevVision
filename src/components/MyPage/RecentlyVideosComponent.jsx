import { useQuery } from '@tanstack/react-query';
import axios from 'axios'; // axios import 추가
import { useEffect, useState } from 'react';
import supabase from '../../supabase/config';
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

  useEffect(() => {
    const getRecentVideoData = async () => {
      if (user && user.email) {
        const { data: findUser, error } = await supabase
          .from('Users')
          .select('recentVideo')
          .eq('email', user.email)
          .single();
        if (error) {
          console.error(error);
          return;
        }
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

      try {
        const response = await axios.get(`${import.meta.env.VITE_YOUTUBE_SEARCH_VIDEO_URL}`, {
          params: {
            part: 'snippet',
            id: videoIds,
            key: import.meta.env.VITE_YOUTUBE_KEY
          }
        });
        return response.data.items;
      } catch (error) {
        throw new Error('Failed to fetch video data');
      }
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

  console.log(videoData);

  return (
    <RecentlyVideosWrapper>
      <RecentlyVideosSection>
        <RecentlyVideosTitleWrapper>
          <h1>최근 본 영상</h1>
        </RecentlyVideosTitleWrapper>
        <RecentlyVideosCardList>
          {videoData.map((video, index) => (
            <RecentlyVideosCard key={index}>
              <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              <p>{video.snippet.title}</p>
            </RecentlyVideosCard>
          ))}
        </RecentlyVideosCardList>
      </RecentlyVideosSection>
    </RecentlyVideosWrapper>
  );
}

export default RecentlyVideosComponent;
