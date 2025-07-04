import React from 'react'
import Portfolio_Image from '../images/portfolio-img.png'; 
import Hero_Circle_Image from '../images/hero-imge-circle.png';
function PortfolioImage() {
  return (
    <>
    <div>
         <img src={Hero_Circle_Image} alt="Sesu Image" className="hero-imge-circle" />
         <img src={Portfolio_Image} alt="Sesu Image" className="portfolio_image" />
    </div>
    </>
  )
}

export default PortfolioImage;