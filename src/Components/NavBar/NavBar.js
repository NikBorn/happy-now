import React from 'react';

const NavBar = () => {

  return (
    <ul className='nav-bar'>
      <li className='nav-item'>
        <a href='/'>
          HOME
        </a>
      </li>
      <li className='nav-item'>
        <a href='/happyhours'>
          HAPPY HOURS
        </a>
      </li>
      <li className='nav-item'>
        <a href='/favorites'>
          FAVORITES
        </a>
      </li>
    </ul>
  );
};

export default NavBar;