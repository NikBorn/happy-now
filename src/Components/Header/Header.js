import React from 'react';
import SignIn from '../SignIn/SignIn';
import {toggleShowFavorites} from '../../actions/index.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Header = (props) => {

  return (
    <div className='header-section'>
      <h1>HappyNow?</h1>
      <h4>Find current and upcoming happy hour specials near you</h4>
      <SignIn />
      <button className='show-favorites-button'
        onClick={event=> {
          event.preventDefault();
          props.toggleShowFavorites(true);
        }}>
        Favorites
      </button>
    </div>
  );
};

Header.propTypes = {
  toggleShowFavorites: PropTypes.func,
  showFAvs: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    showFavs: state.showFavs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowFavorites: (bool) => {
      dispatch(toggleShowFavorites(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);