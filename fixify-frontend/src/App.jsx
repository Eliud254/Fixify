// App.jsx
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginSignUp from './components/LoginSignUp';
import FindHelp from './components/FindHelp';
import Services from './components/Services';
import Contacts from './components/Contact';
import About from './components/About';

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/') // Update the URL with your backend URL
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/find-help" element={<FindHelp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
