import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>BrandName</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar