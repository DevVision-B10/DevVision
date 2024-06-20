import api from '../api/api';

const cache = new Map();

const fetchChannelThumbnail = async (channelId) => {
  if (cache.has(channelId)) return cache.get(channelId);
  try {
    const response = await api.get('/channels', {
      params: {
        part: 'snippet',
        id: channelId
      }
    });
    const thumbnailUrl = response.data.items[0].snippet.thumbnails.default.url;
    cache.set(channelId, thumbnailUrl);
    return thumbnailUrl;
  } catch (err) {
    console.error(`Error fetching channel thumbnail for channelId: ${channelId}`, err);
    return '';
  }
};

const useCourses = async ({ searchQuery }) => {
  const cacheKey = `courses-${searchQuery || import.meta.env.VITE_YOUTUBE_PARAM}`;

  if (cache.has(cacheKey)) return cache.get(cacheKey);

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

    const coursesData = await Promise.all(
      response.data.items.map(async (item) => {
        const channelThumbnail = await fetchChannelThumbnail(item.snippet.channelId);
        return {
          id: item.id.playlistId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          image: item.snippet.thumbnails.high.url,
          channelThumbnail
        };
      })
    );

    cache.set(cacheKey, coursesData);
    return coursesData;
  } catch (err) {
    console.error('Error fetching courses', err);
    return [];
  }
};

export default useCourses;
