// packages
import React from 'react'

// components
import Header from './header/Header'
import Interests from './interests/Interests'
import Personal from './personal/Personal'


const Home = () => {
  return (
    <>
    <Header />
    <Personal />
    <Interests />
    </>
  )
}

export default Home