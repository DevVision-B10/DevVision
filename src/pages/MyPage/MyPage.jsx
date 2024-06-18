import { useState } from 'react';
import RecentlyVideosComponent from '../../components/MyPage/RecentlyVideosComponent';
import SideBar from '../../layouts/SideBar';
import useLogStore from '../../zustand/user-log';
function MyPage() {
  const user = useLogStore((state) => state.user);
  const [displayComponent, setDisplayComponent] = useState('recentVideos');

  const handleOnClickSideBarCategory = (component) => {
    setDisplayComponent(component);
  };

  return (
    <div>
      <SideBar user={user} handleOnClickSideBarCategory={handleOnClickSideBarCategory} />
      {displayComponent === 'recentVideos' && <RecentlyVideosComponent user={user} />}
      {/* {displayComponent === 'chart' && <ChartComponent user={user} />} */}
    </div>
  );
}

export default MyPage;
