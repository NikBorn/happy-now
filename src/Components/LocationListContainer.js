import React, { Component } from 'react';
import LocationList from './LocationList/LocationList';
import { setLocations } from '../actions/index';
import { connect } from 'react-redux';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton.js'


class LocationListContainer extends Component {

  constructor() {
    super();
  }

  getUserLocation(callback) {
    navigator.geolocation.getCurrentPosition(function (location) {
      callback(location.coords.latitude + ',' + location.coords.longitude);
    });
  }

  getLocations(query) {

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    return this.getUserLocation((latlong) => {

      const params = {
        client_id: '20SGZBSFIJ2PAEM2E53DTZNVFZ5K1E4GHCNBKTXM14JVDKBD',
        client_secret: 'C10LMFZC53BRQNH3CJ50SBWJLVWIPTQI4WYPKMPGYE0KZAXB',
        limit: 100,
        query: query,
        v: '20130619',
        ll: latlong
      };

      return fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      })
        .then(response => response.json())
        .then(response => response.response.groups[0].items)
        .then(res => {
          return res.map(place=> {
            return Object.assign({isFavorite: false}, place.venue);
          });  
        })
        .then(resp => this.props.setLocations(resp));
    });
  }

  componentDidMount() {
    this.getLocations('Bars');
  }

  render() {
    const showTen = this.props.locations.filter((location, index)=> {
      if (index < this.props.count) {
        return location;
      }
    })
    return (
      <div>
        {
          !this.props.locations.length &&
          <div>Loading</div>
        }
        {this.props.locations && 
        <LocationList locations={showTen} />}
        <ShowMoreButton/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocations: (locations) => {
      dispatch(setLocations(locations));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    count: state.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

// export default LocationListContainer