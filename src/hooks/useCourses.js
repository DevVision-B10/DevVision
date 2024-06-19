import api from '../api/api';

const useCourses = () => {
  const fetchCourses = async () => {
    try {
      const response = await api.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 50,
          q: import.meta.env.VITE_YOUTUBE_PARAM,
          order: 'relevance',
          type: 'playlist'
        }
      });
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

      return coursesData;
    } catch (err) {
      console.error(err);
    }
  };

  return fetchCourses;
};

export default useCourses;
