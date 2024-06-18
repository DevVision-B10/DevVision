import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import LogInRedirect from './components/LogIn/LogInRedirect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth/callback" element={<LogInRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
