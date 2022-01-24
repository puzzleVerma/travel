import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Jadoo.png'

const Header = () => {
  return <div>
      <header className='header'>
          <div>
              <Link className='links' to="/">
              <img src={logo} alt="Logo" />
              </Link>
          </div>
          <nav className='navbar'>
              <ul>
                <Link className='links' to="/destinations">Destinations</Link>
                <Link className='links' to="/hotels">Hotels</Link>
                <Link className='links' to="/flights">Flights</Link>
                <Link className='links' to="/bookings">Bookings</Link>
                <Link className='links' to="/login">Login</Link>
                <Link className={`links signup`} to="/signup">SignUp</Link>
              </ul>
          </nav>
      </header>
  </div>;
};

export default Header;
