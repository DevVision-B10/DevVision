import { useNavigate } from 'react-router-dom';
import {
  Card,
  ChannelThumbnail,
  ChannelTitle,
  CourseImage,
  CourseTitle,
  CourseTitleContainer
} from './CourseCardStyle';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/playlist/${course.id}`)}>
      <CourseImage src={course.image} alt={course.title} />
      <CourseTitleContainer>
        <ChannelThumbnail src={course.channelThumbnail} alt={course.channelTitle} />
        <CourseTitle>{course.title}</CourseTitle>
      </CourseTitleContainer>
      <ChannelTitle>{course.channelTitle}</ChannelTitle>
    </Card>
  );
};

export default CourseCard;
