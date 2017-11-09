import React, { Component } from 'react';
import LocationList from '../LocationList/LocationList';
import { setLocations, sendHappyHoursToState } from '../../actions/index';
import { connect } from 'react-redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PropTypes from 'prop-types';

class LocationListContainer extends Component {


  render() {
    const listToShow = this.props.locations;

    const showList = this.props.locations.length ? 
      <LocationList locations={listToShow} count={this.props.count} /> 
      : 
      <LoadingScreen />;
    return (
      <div className='location-list-container' >
        { showList }
      </div>
    );
  }
}

const mapDTP = (dispatch) => {
  return {
    setLocations: (locations) => {
      dispatch(setLocations(locations));
    },
    sendHappyHoursToState: (happyHours) => {
      dispatch(sendHappyHoursToState(happyHours));
    }
  };
};

const mapSTP = (state) => {
  return {
    count: state.count,
    favorites: state.favorites,
  };
};

LocationListContainer.propTypes = {
  setLocations: PropTypes.func,
  count: PropTypes.number,
  locations: PropTypes.array,
  favorites: PropTypes.array
};

export default connect(mapSTP, mapDTP)(LocationListContainer);
