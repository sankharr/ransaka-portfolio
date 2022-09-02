// packages
import React from 'react'

// styling
import './Footer.scss'

// icons
import { FaMedium, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
        <h3>Follow Me</h3>
        <p>Let's be social</p>
        <div>
            <FaMedium />
            <FaLinkedin />
            <FaGithub />
        </div>
        <p>&copy; 2022 - Ransaka Ravihara</p>
    </div>
  )
}

export default Footer