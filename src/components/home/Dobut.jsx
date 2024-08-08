import React from 'react';


const Dobut = () => {
  return (
    <div className='container text-white mt-5'>
      <div className="row">
        <p>SENIOR IS THE</p>
        <h4 className='-bold' style={{text:'bold'}}>Ultimate launchpad for your ICPC journey!</h4>
        <div className="col-6 mt-2">
            <img src='media/images/dobut.png' style={{ width:'60%' }} className=''/>

        </div>
        <div className="col-6 mt-5 p-5">
            <h3>INSTANT DOUBT SUPPORT</h3>
            <p className='mt-5'> For instant doubt support, There is a dedicated forum channel. In addition, we have a dedicated channel for discussing problems.</p>
        </div>
      </div>
    </div>
  );
}

export default Dobut;
