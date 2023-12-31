import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registration from './components/Registration';
import Logout from './components/Logout';
import NotFound from "./components/NotFound";
import TutorRegistration from './components/RegistrationTutors';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import RegistrationSelection from './components/RegistrationSelection';

function Routing() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/registration" element={<Registration />} />
          <Route path="/registrationtutors" element={<TutorRegistration />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registrationselection" element={<RegistrationSelection />} />
          <Route path="" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;