import { useState, useEffect } from 'react';
import api from '../api/api';

const useCourses = (searchQuery) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            q: searchQuery || import.meta.env.VITE_YOUTUBE_PARAM,
            order: 'relevance',
            type: 'playlist'
          }
        });

        const channelIds = [...new Set(response.data.items.map((item) => item.snippet.channelId))];

        const channelsResponse = await api.get('/channels', {
          params: {
            part: 'snippet',
            id: channelIds.join(',')
          }
        });

        const channelsData = channelsResponse.data.items.reduce((acc, item) => {
          acc[item.id] = item.snippet.thumbnails.default.url;
          return acc;
        }, {});

        const coursesData = response.data.items.map((item) => ({
          id: item.id.playlistId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          image: item.snippet.thumbnails.high.url,
          channelThumbnail: channelsData[item.snippet.channelId]
        }));

        setCourses(coursesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [searchQuery]);

  return { courses, isLoading, error };
};

export default useCourses;
