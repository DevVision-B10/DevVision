import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SearchIcon from '../../assets/search-icon.png';
import SpinnerIcon from '../../assets/spinner-icon.gif';
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

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  const fetchVideos = async ({ pageParam = 0 }) => {
    const response = {
      data: [
        { key: 0, title: 'dsfsdf' },
        { key: 1, title: '바보' },
        { key: 2, title: '바보' },
        { key: 3, title: '바보' },
        { key: 4, title: '바보' },
        { key: 5, title: '바보' },
        { key: 6, title: '바ㄴㅇㄹㄴㅇㄹ보' },
        { key: 7, title: '바보' },
        { key: 8, title: '바보ㄴㅇㄹㄴㅇㄹ' },
        { key: 9, title: '바보' },
        { key: 10, title: '바보모ㅓㅇ?' },
        { key: 11, title: '바보' },
        { key: 12, title: '바보ㅇㄴㄹㄴㅇ' },
        { key: 13, title: '바보' },
        { key: 14, title: '바보' },
        { key: 15, title: '바ㄴㅇㄹㅇㄴㄹ보' },
        { key: 16, title: '바보' }
      ]
    };

    const start = pageParam * itemsPerPage;
    const end = start + itemsPerPage;
    return {
      data: response.data.slice(start, end),
      nextPage: pageParam + 1,
      totalCount: response.data.length
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
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
      {filteredData && filteredData.map((pageData) => <p key={pageData.key}>{pageData.title}</p>)}
      {hasNextPage && (
        <Footer ref={ref}>
          <img src={SpinnerIcon} width="50px" />
        </Footer>
      )}
    </>
  );
}

export default HomePage;
