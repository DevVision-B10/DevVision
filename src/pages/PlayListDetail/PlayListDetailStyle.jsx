import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
`;

export const CourseList = styled.section`
  width: 100%;
  margin: 10px auto;
  height: 40px;
  border-top: 2px solid var(--lime-color);
  border-bottom: 2px solid var(--lime-color);
`;

export const Details = styled.div`
  width: 100%;
  height: auto;
  font-size: 1rem;
  line-height: 32px;
  margin: 20px auto;
  text-overflow: ellipsis;
`;
