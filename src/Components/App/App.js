import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import LocationList from '../LocationList/LocationList.js';
// import { googleAPIKey, fourSquareClientId, fourSquareClientSecret } from '../Utils/APIKeys.js';
import { setLocations } from '../../actions/index.js';
import { connect } from 'react-redux';
import getLocations from '../../Utils/fourSquareAPI.js';
import { mockLocationsResponse } from '../../Utils/mockData';
import fire from '../../fire.js';
import SignIn from '../SignIn/SignIn.js';
import Map from '../Map/Map.js';
import LocationListContainer from '../LocationListContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }

  componentDidMount () {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='body'>
          <LocationListContainer />
        {/* < Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> */}
        </div>  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocations: (locations) => {
      dispatch(setLocations(locations));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);