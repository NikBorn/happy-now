import React, { Component } from 'react';
import LocationList from '../LocationList/LocationList';
import { setLocations, sendHappyHoursToState } from '../../actions/index';
import { connect } from 'react-redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import PropTypes from 'prop-types';
import fire from '../../fire.js';


class LocationListContainer extends Component {

  fetchhappyhours() {
    const happyHoursFromDB = fire.database().ref('happy-hours');

    happyHoursFromDB.on('value', snapshot => {

      const happyHoursFire = Object.entries(snapshot.val());
      const happyHours = happyHoursFire.map(happyHour=> {
        return (
          Object.assign({fireBaseId: happyHour[0]}, happyHour[1])
        )
      })
      console.log(happyHours)
      this.props.sendHappyHoursToState(happyHours);
    });
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
    this.fetchhappyhours();
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
    locations: state.locations,
    count: state.count,
    showFavorites: state.showFavorites,
    favorites: state.favorites,
    happHours: state.happyHours
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
