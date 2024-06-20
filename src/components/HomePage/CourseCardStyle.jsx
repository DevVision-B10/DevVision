import styled from 'styled-components';

export const Card = styled.div`
  width: 24%;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  text-align: left;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: var(--white-color);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow:
      0 10px 15px rgba(0, 0, 0, 0.4),
      0 4px 6px rgba(0, 0, 0, 0.24);
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CourseTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const CourseTitle = styled.h3`
  font-size: 19px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
`;

export const ChannelThumbnail = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChannelTitle = styled.p`
  font-size: 14px;
  color: #555;
`;
