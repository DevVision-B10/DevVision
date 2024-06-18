import RecentlyVideosComponent from '../../components/MyPage/RecentlyVideosComponent';
import SideBar from '../../layouts/SideBar';
import useLogStore from '../../zustand/user-log';
function MyPage() {
  const user = useLogStore((state) => state.user);

  return (
    <div>
      <SideBar user={user} />
      <RecentlyVideosComponent user={user} />
    </div>
  );
}

export default MyPage;
