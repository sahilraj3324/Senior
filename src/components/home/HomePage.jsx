import React from 'react';
import Hero from './Hero';
import Dobut from './Dobut';
import Coding from './Coding';
import Mentor from './Mentor';
import Daily from './Daily';
import Disscussion from './Disscussion';
import Contributer from './Contributer';
import Why from './Why';
import Hero1 from './Hero1';


const HomePage = () => {
  return (
    <div className='mt-5 '>
      <Hero1 />
      <Dobut />
      <Coding />
      <Mentor />
      <Daily/>
      <Disscussion />
      <Contributer />
      <Why />
    </div>
  );
}

export default HomePage;
