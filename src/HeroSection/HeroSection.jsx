import React from 'react'
import Name from './Name'
import PortfolioImage from './PortfolioImage'
import HeroChild from './HeroChild'

function HeroSection() {
  return (
    <>
    <div className="container hero_section">
      <div className="row align-items-center">
        <div className="col-6 hero_left">
          <Name/>
          </div>
        <div className="col-6 hero_right text-center">
          <PortfolioImage/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default HeroSection