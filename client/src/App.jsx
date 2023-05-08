import roboLogo from './assets/robologo.svg'
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import Quiz from "./components/layout/Quiz/Quiz";
import { AuthProvider } from './components/utils/auth';
import { RequireAuth } from './components/utils/RequireAuth';
import { useAuth } from './components/utils/auth';


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const auth = useAuth();
  const setAuth = (authstate) =>{
    setIsAuthenticated(authstate);
    auth.login("","");
  }
    async function isAuth(){
      try {
        const response = await fetch("http://localhost:5000/auth/verify",{
          method:"GET",
          headers: {token: localStorage.token}
        });
        const parseRes = await response.json();
        console.log(parseRes)
        parseRes === true ? setAuth(true) : setAuth(false);
        
      } catch (err) {
        console.error(err.message)
      }
    }

  useEffect(()=>{
    isAuth();
  },[])

  return (
   <AuthProvider>
     <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Landing /> } />
      <Route exact path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
    </Routes>
    <section className="container">
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/quiz" element={<RequireAuth><Quiz /></RequireAuth>} />
      </Routes>
    </section>
    </Router>
   </AuthProvider>
  )
}

export default App;
