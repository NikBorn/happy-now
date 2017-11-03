import React from 'react';
import beer from '../../Assets/beer.gif'

const LoadingScreen = () => {

  const divStyle = {
    display: 'inline-block',
    border: '2px solid #808589',
    width: '300px',
    backgroundColor: '#FFF',
    padding: '10px',
    height: '530px',
    color: '#111214',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={divStyle}>
      <p className='loading-text'>LOADING YOUR HAPPY PLACES</p>
      <img src={beer} className='beer-loading' alt='beer' />
    </div>
  );
};

export default LoadingScreen;