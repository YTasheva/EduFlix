import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/';
import Discover from './components/Container/';
import Navbar from './components/Navbar/';
import Footer from './components/Footer/';
import Search from './components/Row/';


function App() {
    return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Conatiner" element={<Discover/>} />
            <Route path="/Row" element={<Search/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
    );
}



export default App
