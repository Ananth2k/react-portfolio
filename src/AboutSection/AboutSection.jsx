import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

function AboutSection() {
  return (
    <section className="about_section section position-relative">
    <div className="d-flex align-items-center justify-content-center">
        <h2>About<br></br> <span className="d-flex align-items-center ">me <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 60 58" fill="none">
<path d="M53.25 54L3.75 3M53.25 54L56 3M53.25 54H1" stroke="#3A6BFF" stroke-width="8"/>
</svg>        </span></h2>
    </div>
    <div  className="container">
        <div className="row align-items-center">
            <div className="col-6 d-flex justify-content-center">
                <AboutLeft/>
            </div>
            <div className="col-6">
                <AboutRight/>
                <button>Resume</button>
            </div>
        </div>
    </div>
    
    </section>
  )
}

export default AboutSection