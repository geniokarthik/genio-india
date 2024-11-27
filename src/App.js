import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import ContactUs from './ContactUs';

function App() {
  return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/header" element={<Header />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
  );
}

export default App;
