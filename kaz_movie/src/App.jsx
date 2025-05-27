
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EachMoveiPage from './components/EachMoveiPage'

import AboutUsers from './pages/AboutUsers'

import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-full ${
        darkMode ? "bg-dark text-white" : "bg-white text-black"
      }`}
    >
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUsers" element={<AboutUsers />} />
          <Route path="/movie/:id" element={<EachMoveiPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App

