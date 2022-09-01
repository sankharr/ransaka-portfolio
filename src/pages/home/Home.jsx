// packages
import React from 'react'

// components
import Header from './header/Header'
import Interests from './interests/Interests'
import Personal from './personal/Personal'
import Projects from './projects/Projects'
import Skills from './skills/Skills'


const Home = () => {
  return (
    <>
    <Header />
    <Personal />
    <Interests />
    <Skills />
    <Projects />
    </>
  )
}

export default Home