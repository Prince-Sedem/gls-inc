import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Marquee from './components/Marquee'
import Sdgs from './components/Sdgs'
import Impact from './components/Impact'
import ProgramsSection from './components/ProgramSection'
import ProfileSection from './components/ProfileSection'
import GallerySection from './components/GallerySection'
import SupportCard from './components/SupportCard'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Impact />
    <ProgramsSection />
    <ProfileSection />
    <Sdgs />
    <GallerySection />
    <Contact />
    <Marquee />
    <SupportCard />
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default App
