import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmList from './pages/FilmList';
import FilmDetail from './pages/FilmDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/films/:id" element={<FilmDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
