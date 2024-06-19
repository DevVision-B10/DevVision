import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
git;

const CourseTitle = styled.h3`
  font-size: 19px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChannelTitle = styled.p`
  font-size: 14px;
  color: #555;
`;

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CourseImage src={course.image} alt={course.title} />
      <CourseTitle>{course.title}</CourseTitle>
      <ChannelTitle>{course.channelTitle}</ChannelTitle>
    </Card>
  );
};

export default CourseCard;
