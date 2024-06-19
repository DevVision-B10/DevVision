import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SearchIcon from '../assets/search-icon.png';
import SpinnerIcon from '../assets/spinner-icon.gif';
import CourseCard from '../components/HomePage/CourseCard';
import useCourses from '../hooks/useCourses';
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;
const Search = styled.div`
  position: relative;
  max-width: 400px;
  margin: auto;
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
const itemsPerPage = 5;

function HomePage() {
  const searchRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const fetchCourses = useCourses();
  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  const fetchVideos = async ({ pageParam = 0 }) => {
    const start = pageParam * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      data: fetchCourses.slice(start, end),
      nextPage: pageParam + 1,
      totalCount: fetchCourses.length
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['videos'],
    queryFn: fetchVideos,
    getNextPageParam: (lastPage) => {
      const { nextPage, totalCount } = lastPage;
      const totalPages = Math.ceil(totalCount / itemsPerPage);
      if (nextPage < totalPages) return nextPage;
      return undefined;
    }
  });

  const { ref } = useInView({
    threshold: 1,
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
    <>
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
        <Grid>
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
    </>
  );
}

export default HomePage;
