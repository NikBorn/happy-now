import React, { Component } from 'react';
import LocationList from '../LocationList/LocationList';
import { setLocations } from '../../actions/index';
import { connect } from 'react-redux';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton.js';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PropTypes from 'prop-types';

class LocationListContainer extends Component {
  constructor() {
    super();
  }

  getUserLocation(cback) {
    navigator.geolocation.getCurrentPosition(function (location) {
      cback(location.coords.latitude + ',' + location.coords.longitude);
    });
  }

  getLocations(query) {

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    return this.getUserLocation((latlong) => {

      const params = {
        'client_id': '20SGZBSFIJ2PAEM2E53DTZNVFZ5K1E4GHCNBKTXM14JVDKBD',
        'client_secret': 'C10LMFZC53BRQNH3CJ50SBWJLVWIPTQI4WYPKMPGYE0KZAXB',
        limit: 100,
        query: query,
        'v': '20130619',
        ll: latlong
      };

      return fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => response.response.groups[0].items)
        .then(res => {
          return res.map(place=> {
            return Object.assign({
              isExtended: false,
              isFavorite: false, 
              contact: {formattedPhone: 'None Listed'}
            }, place.venue);
          });  
        })
        .then(resp => this.props.setLocations(resp));
    });
  }

  componentDidMount() {
    this.getLocations('Bars');
  }

  render() {

    const listToShow = this.props.showFavorites === true ? 
      this.props.favorites : this.props.locations;

    const showList = this.props.locations.length ? 
      <LocationList locations={listToShow} count={this.props.count} /> 
      : 
      <LoadingScreen />;
    return (
      <div className='location-list-container' >
        { showList }
        <ShowMoreButton />
      </div>
    );
  }
}

const mapDTP = (dispatch) => {
  return {
    setLocations: (locations) => {
      dispatch(setLocations(locations));
    }
  };
};

const mapSTP = (state) => {
  return {
    locations: state.locations,
    count: state.count,
    showFavorites: state.showFavorites,
    favorites: state.favorites
  };
};

LocationListContainer.propTypes = {
  setLocations: PropTypes.func,
  showFavorites: PropTypes.bool,
  count: PropTypes.number,
  locations: PropTypes.array,
  favorites: PropTypes.array
};

export default connect(mapSTP, mapDTP)(LocationListContainer);
