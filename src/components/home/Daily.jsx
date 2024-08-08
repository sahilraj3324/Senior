import React from 'react';

const Daily = () => {
  return (
    <div className='container text-white mt-5'>
      <div className="row ">
      <div className="col-6 mt-5 p-5">
            <h3>DAILY PRACTICE PROBLEMS</h3>
            <p className='mt-5'> We have practice problems on every day that are not contest days. There are also sessions dedicated to explanations for them as well.</p>
            <button className=''>Login</button>
        </div>
        <div className="col-6 mt-5">
            <img src='media/images/code.svg' style={{ width:'80%' }} className=''/>
        </div>
      </div>
    </div>
  );
}

export default Daily;
