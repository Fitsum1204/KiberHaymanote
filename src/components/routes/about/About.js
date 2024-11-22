import React from 'react'
import BasicInfo from '../../basicInfo/BasicInfo'
import './about.styles.scss'
import { Routes ,Route} from 'react-router-dom'
import Structure from '../../structure/Structure'
const About = () => {
  return (
    <div className='about'>
       <Routes >
        <Route index Component={BasicInfo}/>
        <Route path=':structure' Component={Structure} />
        </Routes> 
      
    </div>
  )
}

export default About
