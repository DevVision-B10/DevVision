import axios from 'axios';

// const VIDEO_BASE_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_URL;
const VIDEO_PLAYLISTITEM_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_ITEM_URL;
const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

export const fetchApi = async () => {
  try {
    const response = await axios.get(VIDEO_PLAYLISTITEM_URL, {
      params: {
        part: 'snippet',
        playlistId: PLAYLIST_ID,
        key: YOUTUBE_KEY
      }
    });
    console.log('response.data.items => ', response.data.items);
    return response.data.items;
  } catch (err) {
    console.log(err);
    alert('뭔가 잘못된 것 같아요! 데이터를 로드 할 수 없어요. ㅠ.ㅠ');
  }
};
