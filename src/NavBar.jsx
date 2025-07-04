import React from 'react'
import PortfolioMainText from './images/portfolio-text.png';

function NavBar() {
  return (
    <header className="navbar ">
        <div className='m-auto col-10'>
    <div className='nav_items d-flex align-items-center justify-content-between'>
        <div className="navbar_logo">
         <img src={PortfolioMainText} alt="Sesu Text" />
    </div>
    <div className="d-flex">
    <nav className="navbar_links">
        <a href="about">About</a>
        <a href="projects">Projets</a>
        <a href="contact">Contact</a>
        <a href="/resume.pdf" className="navbar_button" target="_blank" rel="noreferrer">
        Resume
      </a>
    </nav>
    </div>
    </div>
    </div>
    
    
    </header>
  )
}

export default NavBar