import axios from 'axios';

const VIDEO_BASE_URL = import.meta.env.VITE_YOUTUBE_SEARCH_VIDEO_URL;
const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;

export const getVideoData = async (videoIds) => {
  try {
    const response = await axios.get(VIDEO_BASE_URL, {
      params: {
        part: 'snippet',
        id: videoIds,
        key: YOUTUBE_KEY
      }
    });

    return response.data.items;
  } catch (error) {
    alert('영상을 가져오는데 실패했습니다.');
    return;
  }
};
