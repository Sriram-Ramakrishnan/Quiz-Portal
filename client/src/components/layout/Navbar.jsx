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
    localStorage.removeItem("user_email");
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
        {localStorage.user_email && <li> <a>{localStorage.user_email}</a></li>}
        {auth.user && <li><button onClick={e => handleLogout(e)}>Logout</button></li>} 
      </ul>
    </nav>
  )
}

export default Navbar
