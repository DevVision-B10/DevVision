import styled from 'styled-components';
import SadIcon from '../assets/sad-icon.png';
const Container = styled.div`
  background-color: var(--white-color);
  text-align: center;
`;
function UnknownPage() {
  return (
    <Container className="back-drop d-flex-column">
      <img src={SadIcon} width="100px" />
      <h1 className="font-title">페이지를 찾을 수 없습니다</h1>
    </Container>
  );
}

export default UnknownPage;
