import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-logo">
                        <h2>BrandName</h2>
                    </div>
                    <div class="footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-social">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 BrandName. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer