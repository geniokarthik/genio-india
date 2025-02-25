import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "src/app/components/Home"
import Service from "src/app/components/Service"
import Aboutus from "src/app/components/Aboutus"


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
  );
}

export default App;
