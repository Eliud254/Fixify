import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp';
import FindHelp from './components/FindHelp';


function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginSignUp />} />
        <Route path="/find-help" element={<FindHelp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;