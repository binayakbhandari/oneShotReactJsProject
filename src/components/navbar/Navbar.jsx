import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <h1>BrandName</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="nav-social">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar