import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comment from '../components/Comment';
import HomePage from '../pages/HomePage/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
