import React from 'react';
import { toggleShowFavorites } from '../../actions/index.js';
import { connect } from 'react-redux';

const NavBar = () => {

  return (
    <ul className='nav-bar'>
      <li className='nav-item'>
        <a href='/'>
          HOME
        </a>
      </li>
      <li className='nav-item'>
        <a href='/happyHours'>
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowFavorites: (bool) => {
      dispatch(toggleShowFavorites(bool));
    }
  };
};

export default NavBar;