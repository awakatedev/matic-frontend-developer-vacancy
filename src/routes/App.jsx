import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../assets/styles/main.scss';
import Layout from './Layout';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
