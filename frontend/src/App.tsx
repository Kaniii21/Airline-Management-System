import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import Complain from './pages/Complain';
import FlightSchedule from './pages/FlightSchedule';
import Manage from './pages/Manage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/schedule" element={<FlightSchedule />} />
            <Route path="/about" element={<About />} />
            <Route path="/complain" element={<Complain />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
