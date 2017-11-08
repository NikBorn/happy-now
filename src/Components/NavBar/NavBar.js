import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <ul className='nav-bar'>
      <li className='nav-item'>
        <Link to='/'>
          HOME
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/happyHours'>
          HAPPY HOURS
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/favorites'>
          FAVORITES
        </Link>
      </li>
    </ul>
  );
};


export default NavBar;