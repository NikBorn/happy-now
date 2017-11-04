import React from 'react';
import {increaseCount} from '../../actions/index.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  return (
    <button className='show-more'
      onClick={event=> {
        event.preventDefault();
        props.increaseCount();
      }}>
      Show More
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (locations) => {
      dispatch(increaseCount(locations));
    }
  };
};

ShowMoreButton.propTypes = {
  increaseCount: PropTypes.func
};

export default connect(null, mapDispatchToProps)(ShowMoreButton);