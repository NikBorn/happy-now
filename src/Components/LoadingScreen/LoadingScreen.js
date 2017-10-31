import React from 'react';

const LoadingScreen = () => {
  const Smiley = require(`../../Assets/Smiley.svg`);

  const divStyle = {
    backgroundImage: `url(${Smiley})`,
    display: 'inline-block',
    border: '2px solid #7AA0DB',
    width: '300px',
    backgroundColor: '#2F5F96',
    padding: '10px',
    height: '530px',
    color: '#F4F3F2',
    backgroundRepeat: 'no-repeat'
  }

  return(
    <div style={divStyle}>
      <p>LOADING YOUR HAPPY PLACES</p>
      {Smiley}
    </div>
  )
}

export default LoadingScreen;