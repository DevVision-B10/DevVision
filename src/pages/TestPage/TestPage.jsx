import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import supabase from '../../supabase/config';
import useRecentVideoStore from '../../zustand/recent-video';
import useLogStore from '../../zustand/user-log';

/**
 * 1. 최근 본 영상에 대한 전역 관리를 추가한다.
 * 2. 배열 형식으로 videoId 를 넣는다.
 * 3. 사용자가 클릭했을때 전역 상태 값을 업데이트 한다.
 * 4. string 으로 변경해 해당 유저에 컬럼을 update 한다.
 */

function TestPage() {
  const recent = useRecentVideoStore((state) => state.recent);
  const addRecentVideo = useRecentVideoStore((state) => state.addRecentVideo);
  const user = useLogStore((state) => state.user);

  const { data: test, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: () => axios.get(import.meta.env.VITE_TEST_URL)
  });

  const handleOnClickCard = async (videoId) => {
    await addRecentVideo(videoId);

    const updateRecent = useRecentVideoStore.getState().recent;
    console.log(updateRecent);

    if (user) {
      const { email } = user;
      const recentString = JSON.stringify(updateRecent);
      const date = dayjs().format('YYYY-MM-DD');
      const updateUserData = {
        email,
        recentVideo: recentString,
        social: user.app_metadata.provider,
        createdAt: date,
        updatedAt: date
      };

      const { error } = await supabase.from('Users').upsert(updateUserData, { onConflict: ['email'] });

      if (error) {
        console.error(error);
      } else {
        console.log('완료');
      }
    }
  };

  console.log(user);
  console.log(recent);

  if (isLoading) return 'loading';

  return (
    <div>
      {test.data.items.map((item) => (
        <div onClick={() => handleOnClickCard(item.id.videoId)} key={item.id.videoId} style={{ cursor: 'pointer' }}>
          <img src={item.snippet.thumbnails.default.url} />
          {item.snippet.title}
        </div>
      ))}
    </div>
  );
}

export default TestPage;
