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

export const SubmitButton = styled.button`
  cursor: pointer;
  background: var(--yellow-color);
  display: block;
  color: var(--black-color);
  margin: auto;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: 0px 5px 0px 0px #a66615; /* 기본 상태에서 box-shadow 있음 */

  &:hover {
    transform: translateY(5px);
    box-shadow: none; /* 커서를 갖다 댈 때 box-shadow 없음 */
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5); /* 눌렀을 때의 box-shadow 효과 */
    position: relative;
    top: 2px;
  }

  p {
    font-weight: 600;
  }
`;

export const SubmitButtonWrap = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 10px;
`;
