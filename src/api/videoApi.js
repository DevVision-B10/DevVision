import axios from 'axios';

const VITE_YOUTUBEVIDEO_ID = import.meta.env.VITE_YOUTUBE_VIDEO_ID;
const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;

export const videoApi = async (id) => {
  try {
    const response = await axios.get(VITE_YOUTUBEVIDEO_ID, {
      params: {
        part: id,
        key: YOUTUBE_KEY
      }
    });
    console.log(response.data.items);
    return response.data.items;
  } catch (err) {
    console.error(err);
    alert('뭔가 잘못된 것 같아요! 데이터를 로드 할 수 없어요. ㅠ.ㅠ');
  }
};
