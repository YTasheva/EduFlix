import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './Components/Container';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Search from './Components/Row';


function App() {
    return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Conatiner" element={<Discover/>} />
            <Route path="/Row" element={<Search/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
    );
}



export default App
