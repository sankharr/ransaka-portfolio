// packages
import React from 'react'

// styling
import './Interests.scss'

// icons
import { GrCloudComputer, GrLanguage, GrVirtualMachine, GrStackOverflow, GrBarChart  } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'


const interestsArray = [
    {
        title: 'Cloud Compute',
        subtitle: 'I utilize AWS to develop and productionize machine learning systems.',
        icon: <GrCloudComputer />
    },
    {
        title: 'NLP',
        subtitle: 'I utilize AWS to develop and productionize machine learning systems.',
        icon: <GrLanguage />
    },
    {
        title: 'Machine Learning',
        subtitle: 'I utilize AWS to develop and productionize machine learning systems.',
        icon: <GrVirtualMachine />
    },
    {
        title: 'Parallel Computing',
        subtitle: 'HIVE, Hadoop, and Spark, Oh my!',
        icon: <GrStackOverflow />
    },
    {
        title: 'Collaboration',
        subtitle: 'I enjoy working with my team to create winning strategies.',
        icon: <FiUsers />
    },
    {
        title: 'Data Analytics',
        subtitle: 'I love telling a story. Getting to the heart of a problem and coming up with a solution.',
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