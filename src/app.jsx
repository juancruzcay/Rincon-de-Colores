import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import Gallery from './componentes/galery';
import Calculator from './componentes/calculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/galery" element={<galery />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
