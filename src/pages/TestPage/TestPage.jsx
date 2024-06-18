import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useRecentVideoStore from '../../zustand/recent-video';

/**
 * 1. 최근 본 영상에 대한 전역 관리를 추가한다.
 * 2. 배열 형식으로 videoId 를 넣는다.
 * 3. 사용자가 클릭했을때 전역 상태 값을 업데이트 한다.
 * 4. string 으로 변경해 해당 유저에 컬럼을 update 한다.
 *
 */

function TestPage() {
  const recent = useRecentVideoStore((state) => state.recent);
  const addRecentVideo = useRecentVideoStore((state) => state.addRecentVideo);

  const { data: test, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: () => axios.get(import.meta.env.VITE_TEST_URL)
  });

  const handleOnClickCard = (videoId) => {
    addRecentVideo(videoId);
    console.log(videoId);
  };
  console.log(test);

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
