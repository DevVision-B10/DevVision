import { useNavigate } from 'react-router-dom';
import SadIcon from '../../assets/sad-icon.png';
import { Container } from './UnknownPageStyle';

function UnknownPage() {
  const navigate = useNavigate();
  return (
    <Container className="back-drop d-flex-column">
      <img src={SadIcon} width="100px" />
      <h1 className="font-title">페이지를 찾을 수 없습니다</h1>
      <button className="btn-yellow" onClick={() => navigate(-1)}>
        뒤로가기
      </button>
    </Container>
  );
}

export default UnknownPage;
