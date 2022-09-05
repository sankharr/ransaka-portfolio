// packages
import React from 'react'

// styling
import './Interests.scss'

// icons
import { GrCloudComputer, GrLanguage, GrVirtualMachine, GrStackOverflow, GrBarChart  } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'


const interestsArray = [
    {
        title: 'Cloud Computing',
        subtitle: 'Actively using AWS for daily operational and project-related tasks.',
        icon: <GrCloudComputer />
    },
    {
        title: 'Recommender Systems',
        subtitle: 'Utilized AWS and open source frameworks to build recommendation systems for business.',
        icon: <GrLanguage />
    },
    {
        title: 'User Research and Analytics',
        subtitle: 'Closely work with business users to identify their requirements and build suitable AI/ML solutions for achieving business goals.',
        icon: <GrBarChart />
    },
    {
        title: 'Machine Learning',
        subtitle: 'Create various machine learning solutions with the help of the AWS echo system.',
        icon: <GrVirtualMachine />
    },
    {
        title: 'Collaboration',
        subtitle: 'I enjoy working with my team to create winning strategies.',
        icon: <FiUsers />
    },
    {
        title: 'Data Analytics',
        subtitle: 'Converted business logic into SQL, created dashboards/reports to express finding to non-technical people.',
        icon: <GrBarChart />
    },
    

]

const Interests = () => {
  return (
    <div className='Interests'>
        <h1>Areas of Interest</h1>
        <p>Take a look at some of the things I love working on.</p>
        <div className='Interests__cardContainer'>
            {interestsArray.map((item) =>
            <div className='Interests__card' key={item.title}>
                <p>{item.icon}</p>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default Interests