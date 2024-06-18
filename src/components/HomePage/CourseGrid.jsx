import React from 'react';
import styled from 'styled-components';
import useCourses from '../../hooks/useCourses';
import CourseCard from './CourseCard';

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const CourseGrid = ({ searchQuery }) => {
  const { courses, isLoading, error } = useCourses();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <ErrorMessage>오류가 발생했습니다: {error}</ErrorMessage>;

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <GridContainer>
      <Grid>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
    </GridContainer>
  );
};

export default CourseGrid;
