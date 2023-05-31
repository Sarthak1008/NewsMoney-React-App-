import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import News from './components/News';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News country="in" category="general" />} />
          <Route path="/general" element={<News country="in" category="general" />} />
          <Route path="/business" element={<News country="in" category="business" />} />
          <Route path="/health" element={<News country="in" category="health" />} />
          <Route path="/entertainment" element={<News country="in" category="entertainment" />} />
          <Route path="/science" element={<News country="in" category="science" />} />
          <Route path="/sports" element={<News country="in" category="sports" />} />
          <Route path="/technology" element={<News country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
