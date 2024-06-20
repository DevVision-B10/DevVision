import axios from 'axios';

// TODO: 너 사라져야함
// 인자로 url 카테고리를 인자로 받아야함 -> id 랑 카테고리가 들어간 객체를 인자로 받아야함

const VIDEO_PLAYLISTITEM_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_ITEM_URL;
const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY;

export const fetchPlaylist = async (playlistId) => {
  try {
    const response = await axios.get(VIDEO_PLAYLISTITEM_URL, {
      params: {
        part: 'snippet',
        playlistId,
        key: YOUTUBE_KEY
      }
    });
    console.log(response.data.items);
    return response.data.items;
  } catch (err) {
    console.error(err);
    alert('뭔가 잘못된 것 같아요! 데이터를 로드 할 수 없어요. ㅠ.ㅠ');
    return;
  }
};
