import {
  RecentlyVideosCard,
  RecentlyVideosCardList,
  RecentlyVideosSection,
  RecentlyVideosTitleWrapper,
  RecentlyVideosWrapper
} from './RecentlyVideosComponentStyle';

function RecentlyVideosComponent() {
  return (
    <RecentlyVideosWrapper>
      <RecentlyVideosSection>
        <RecentlyVideosTitleWrapper>
          <h1>최근 본 영상</h1>
        </RecentlyVideosTitleWrapper>
        <RecentlyVideosCardList>
          <RecentlyVideosCard>
            <img src="/src/assets/pikachu.png" />
            <p>제목</p>
          </RecentlyVideosCard>
          <RecentlyVideosCard>
            <img src="/src/assets/pikachu.png" />
            <p>제목</p>
          </RecentlyVideosCard>
          <RecentlyVideosCard>
            <img src="/src/assets/pikachu.png" />
            <p>제목</p>
          </RecentlyVideosCard>
        </RecentlyVideosCardList>
      </RecentlyVideosSection>
    </RecentlyVideosWrapper>
  );
}

export default RecentlyVideosComponent;
