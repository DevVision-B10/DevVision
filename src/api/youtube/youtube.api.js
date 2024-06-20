import api from './api';

const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;

export const getVideoData = async (category, paramObj) => {
  paramObj.key = YOUTUBE_KEY;

  try {
    const response = await api.get(`/${category}`, {
      params: paramObj
    });

    return response.data.items;
  } catch (error) {
    alert('영상을 가져오는데 실패했습니다.');
    return;
  }
};

export const getChannelData = async (channelId) => {
  const response = await api.get('/channels', {
    params: {
      part: 'snippet',
      id: channelId
    }
  });

  return response;
};

export const getSearchData = async (searchQuery) => {
  const response = await api.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 50,
      q: searchQuery || import.meta.env.VITE_YOUTUBE_PARAM,
      order: 'relevance',
      type: 'playlist'
    }
  });

  return response;
};
