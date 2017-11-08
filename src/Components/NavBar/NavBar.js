import React from 'react';
import { toggleShowFavorites } from '../../actions/index.js';
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowFavorites: (bool) => {
      dispatch(toggleShowFavorites(bool));
    }
  };
};

export default NavBar;