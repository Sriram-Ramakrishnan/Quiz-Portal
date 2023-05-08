import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

const Navbar = () => {

  const navStyles  = ({isActive}) => {
    return{
      backgroundcolor: isActive? 'white' : 'black'
    }
  }

  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    auth.logout();
    navigate('/',{replace: true});
  }

  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="/"><i className="fas fa-code"></i> Logo here</a>
      </h1>
      <ul>
        <li><Link to='/dashboard'></Link></li>
        {!auth.user && <li><Link to="/register">Register</Link></li>}
        {!auth.user && <li><Link to="/login">Login</Link></li>}
        {auth.user && <li><button onClick={e => handleLogout(e)}>Logout</button></li>} 
      </ul>
    </nav>
  )
}

export default Navbar
