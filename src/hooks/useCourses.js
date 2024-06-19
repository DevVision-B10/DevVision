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
            maxResults: 50,
            q: searchQuery || import.meta.env.VITE_YOUTUBE_PARAM,
            order: 'relevance',
            type: 'playlist'
          }
        });
        // console.log(response.data.items);
        const coursesData = await Promise.all(
          response.data.items.map(async (item) => {
            const channelResponse = await api.get('/channels', {
              params: {
                part: 'snippet',
                id: item.snippet.channelId
              }
            });
            const channelThumbnail = channelResponse.data.items[0].snippet.thumbnails.default.url;
            return {
              id: item.id.playlistId,
              title: item.snippet.title,
              channelTitle: item.snippet.channelTitle,
              image: item.snippet.thumbnails.high.url,
              channelThumbnail
            };
          })
        );
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
