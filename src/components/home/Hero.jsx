import React from 'react';
import './hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='text-white p-5 container mb-5  b'>
      <div className='row'>
            <div className='col-6 mt-5 p-5'><h2 style={{fontweight: 'bold'}}><a href=''>An</a> ICPC Bootcamp</h2>
        <h3 className=''>Free for Everyone!</h3>
        <p className='mt-5 para'>Jaskaran Singh (Master, ICPC World Finalist, Upcoming Google SWE)</p>
        <button className=' '>Watch this video to join ></button>
        </div>
        <div className='col-6 mt-5 p-5'>
            <Link to='/page' aria-current="page"> 
            <h1>Ask</h1>
            <h1>Senior</h1></Link></div>
        
    
      </div>
    </div>
  );
}

export default Hero;
