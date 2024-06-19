// import { useState, useEffect } from 'react';
// import api from '../api/api';

// const useCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const searchParam = import.meta.env.VITE_YOUTUBE_PARAM;
//         const response = await api.get('/search', {
//           params: {
//             part: 'snippet',
//             maxResults: 50,
//             q: searchParam,
//             order: 'relevance',
//             type: 'video'
//           }
//         });
//         const coursesData = response.data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channelTitle: item.snippet.channelTitle,
//           image: item.snippet.thumbnails.high.url
//         }));
//         setCourses(coursesData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return { courses, isLoading, error };
// };

// export default useCourses;

import { useState, useEffect } from 'react';
import api from '../api/api';

const useCourses = (searchQuery) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('/search', {
          params: {
            part: 'snippet',
            maxResults: 50,
            q: searchQuery || import.meta.env.VITE_YOUTUBE_PARAM,
            order: 'relevance',
            type: 'video'
          }
        });
        const coursesData = response.data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          image: item.snippet.thumbnails.high.url
        }));
        setCourses(coursesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [searchQuery]);

  return { courses, isLoading, error };
};

export default useCourses;
