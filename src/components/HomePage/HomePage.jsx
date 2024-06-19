import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Link to="/detail/PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP">코딩애플 리액트 강의</Link>
      <Link to="/detail/1">강의1</Link>
      <Link to="/detail/2">강의2</Link>
      <Link to="/detail/3">강의3</Link>
      <Link to="/detail/4">강의4</Link>
    </>
  );
}

export default HomePage;
