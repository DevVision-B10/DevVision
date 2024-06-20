import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '../assets/search-icon.png';
import SpinnerIcon from '../assets/spinner-icon.gif';
import CourseCard from '../components/HomePage/CourseCard';
import MainBanner from '../components/HomePage/MainBanner';

const Grid = styled.div`
  max-width: 1200px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
`;
const Footer = styled.div`
  width: 100%;
  text-align: center;
`;
const Search = styled.div`
  position: relative;
  max-width: 400px;
  margin: 40px auto 20px auto;
  text-align: center;
`;
const SearchBtn = styled.img`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 20px;
`;
const SearchInput = styled.input`
  width: 90%;
`;
const itemsPerPage = 4;

function HomePage() {
  const searchRef = useRef(null);
  const courses = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  const fetchVideos = async ({ pageParam = 0 }) => {
    const start = pageParam * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      data: courses.slice(start, end),
      nextPage: pageParam + 1,
      totalCount: courses.length
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['videos', searchQuery],
    queryFn: fetchVideos,
    getNextPageParam: (lastPage) => {
      const { nextPage, totalCount } = lastPage;
      const totalPages = Math.ceil(totalCount / itemsPerPage);
      if (nextPage < totalPages) return nextPage;
      return undefined;
    }
  });

  const { ref } = useInView({
    threshold: 0.9,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchRef.current.value.toLowerCase());
  };

  const filteredData = data?.pages.flatMap((page) =>
    page.data.filter((item) => item.title.toLowerCase().includes(searchQuery))
  );

  return (
    <div>
      <MainBanner />
      <Search>
        <form onSubmit={handleSearch}>
          <SearchInput placeholder="Search..." ref={searchRef} required />
          <SearchBtn src={SearchIcon} alt="search icon" onClick={handleSearch} />
        </form>
      </Search>
      {isLoading ? (
        <Footer>
          <img src={SpinnerIcon} width="50px" />
        </Footer>
      ) : filteredData?.length > 0 ? (
        <Grid className="d-flex-row">
          {filteredData?.map((pageData) => (
            <CourseCard key={pageData.id} course={pageData} />
          ))}
          {hasNextPage && (
            <Footer ref={ref}>
              <img src={SpinnerIcon} width="50px" />
            </Footer>
          )}
        </Grid>
      ) : (
        <div className="d-flex-column">
          <h1 className="font-title">해당 결과값에 대한 영상이 없습니다😅</h1>
        </div>
      )}
    </div>
  );
}

export default HomePage;
