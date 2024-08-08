import React from 'react'
import Top from './Top'
import Hero from './Hero'
import Top2 from './Top2'
import { Link } from 'react-router-dom'

const Hero1 = () => {
  return (
    <div id="carouselExampleAutoplaying " className="carousel slide mt-5" data-bs-ride="carousel">
         <h2 className='mb- text-white'>Develop your skill without <br /><Link to='/aboutpage'>Diligence</Link></h2>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Top />
    </div>
    <div className="carousel-item">
      <Hero />
    </div>
    <div className="carousel-item">
      <Top2 />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Hero1
