import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <div>
        {/* Navbar */}

        <Navbar />
        {/* Card Container */}
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
            />
            <h2>Card Title 1</h2>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
            />
            <h2>Card Title 2</h2>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
            />
            <h2>Card Title 3</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
    
  )
}

export default Home