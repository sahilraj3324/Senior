import React from 'react';
import { useState } from 'react';

const Why = () => {

    let [count , setCount] = useState(0)
    function val (){
        setCount(count+1)
    }
    
  return (
    <div className='container text-white'>
      <div className="row text-center">
       <h2>Why Senior ?</h2>
        <div className="col-6"><img src='media/images/coding.svg' style={{width :'90%'}}/></div>
        <div className="col-6 mt-5">
        <h3>ICPC with Senior!</h3>
            <p className='mt-5 '>Jaskaran Singh, our Co-Founder is AIR 1 in ICPC Regionals, and an ICPC World Finalist as well.</p>
            <p className=''>Make sure to join this bootcamp led by him to ace your ICPC 2023-24 preperation with the world finalist and other team of mentors as well.</p>
            <button className='mb-5'>Regester</button>
        </div>
        <div className="row"></div>
        <button className='mt-5  item-center mb-5' onClick={val}>Visitor Count : {count}</button>
      </div>
    </div>
  );
}

export default Why;
