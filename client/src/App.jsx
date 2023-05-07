import roboLogo from './assets/robologo.svg'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import Quiz from "./components/layout/Quiz/Quiz";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Landing />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
    <section className="container">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </section>
  </Router>
  )
}

export default App;
