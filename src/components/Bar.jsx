import React from 'react'
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <nav className="nav">
    <div className="navbar-logo">
      <Link to='/' aria-current="about">Senior</Link>
    </div>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to='/aboutpage' aria-current="about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/page' aria-current="about">Learn</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/">Marketplace#not working</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/">Explore#not workin</Link>
      </li>
    </ul>
    <div className="navbar-right">
      <Link className='btn btn-primary'>Sign Up</Link>
      <div className="profile-pic">
        <img src="https://via.placeholder.com/30" alt="Profile" />
      </div>
    </div>
  </nav>
  )
}

export default Bar
