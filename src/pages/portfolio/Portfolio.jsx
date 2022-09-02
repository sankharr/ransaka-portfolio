// packages
import React from 'react';

// styling
import './Portfolio.scss';

// assets
import gitImage from '../../assets/git.png';

const projectData = [
    {
        title: 'Automating AWS EC2 Shutdown with Bash Scripts',
        description: "A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)",
        date: 'January 20, 2020',
        link: ''
    },
    {
        title: 'DavisBase: A Custom Designed Database (Python)',
        description: "A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)",
        date: 'January 20, 2020',
        link: ''
    },
    {
        title: 'XGBoost for Text Classification',
        description: "A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)",
        date: 'January 20, 2020',
        link: ''
    },
]

const Projects = () =>{
    return (
        <div className='Projects'>
            {projectData.map((item) => 
                <div className='Projects__listItem' key={item.title}>
                    <img src={gitImage} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>Ransaka Ravihara on {item.date}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio__banner">
        <h1>Portfolio</h1>
        <p>
          <span>Home</span> -> Portfolio
        </p>
      </div>
      <Projects />
    </>
  )
}

export default Portfolio