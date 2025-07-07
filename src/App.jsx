import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import HeroChild from './HeroSection/HeroChild'
import AboutSection from './AboutSection/AboutSection'
import SkillsSection from './SkillsSection/SkillsSection'


function App() {

  return (
    <>
  <Header/>
  <HeroChild/>
  <AboutSection/>
  <SkillsSection/>
    </>
  )
}

export default App
