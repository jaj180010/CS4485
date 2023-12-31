import React from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import './Navbar.css'
import { useState, useEffect } from 'react'
import Registration from './Registration'
const Navbar = () => {

  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate('/registrationselection');
  }

  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);

  // Function to handle scrolling and toggle the sticky class
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (location.pathname === '/homepage') {
    return null;
  }

  return (
    <div id="navbar1" className={isSticky ? 'navbar sticky' : 'navbar'}>
    <nav className='navbar'>
      <ul>
        <li className='logo_landing'>
          <Link to="/">ΔTHΞΠΔ</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        </ul>
        <div className='signup-container'>
        <Link to="/registrationselection">
        <button className='signup'onClick={navigateRegister}>Sign Up</button>
            </Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
