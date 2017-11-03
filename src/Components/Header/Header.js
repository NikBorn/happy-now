import React from 'react';
import SignIn from '../SignIn/SignIn';


const Header = () => {

  return (
    <div className='header-section'>
      <h1>HappyNow?</h1>
      <h4>Find current and upcoming happy hour specials near you</h4>
      <SignIn />
      <button className='show-favorites-button'>
        Favorites
      </button>
    </div>
  );
};

export default Header;