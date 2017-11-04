import React from 'react';
import beer from '../../Assets/beer.gif';


const LoadingScreen = () => {

  return (
    <div className='loading-screen'>
      <p className='loading-text'>LOADING YOUR HAPPY PLACES</p>
      <img src={beer} className='beer-loading' alt='beer' />
    </div>
  );
};



export default LoadingScreen;