import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />

    </>
  )
}

export default App