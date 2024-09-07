import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Card Container */}
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h2>Welcome to Our Website</h2>
            <p>Explore the amazing world of web development with us.</p>
            <a href="#" class="cta-btn">Get Started</a>
          </div>
          <div class="hero-card">
            <img src="https://via.placeholder.com/400x300" alt="Hero Image" />
            <h3>Our Top Project</h3>
            <p>We’ve delivered high-quality solutions to our clients, and you could be next!</p>
          </div>
        </div>
      </section>

      <Footer />
    </>

  )
}

      export default Home