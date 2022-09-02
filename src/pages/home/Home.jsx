// packages
import React from 'react'

// components
import Header from './header/Header'
import Interests from './interests/Interests'
import Personal from './personal/Personal'
import Platforms from './platforms/Platforms'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <>
    <Header />
    <Personal />
    <Interests />
    <Skills />
    <Projects />
    <Platforms />
    <Footer />
    </>
  )
}

export default Home