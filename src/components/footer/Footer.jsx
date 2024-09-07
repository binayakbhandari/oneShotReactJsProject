import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-content">
              <div className="footer-logo">
                  <h2>CompanyName</h2>
              </div>
              <div className="footer-links">
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
              <div className="footer-social">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
          </div>
          <div className="footer-bottom">
              <p>&copy; 2024 CompanyName. All rights reserved.</p>
          </div>
      </footer>
  )
}

export default Footer