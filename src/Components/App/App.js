import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import LocationListContainer from 
  '../LocationListContainer/LocationListContainer.js';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import HappyHourContainer from '../HappyHourContainer/HappyHourContainer.js';
import PropTypes from 'prop-types';
import { setLocations, sendHappyHoursToState } from '../../actions/index';
import { connect } from 'react-redux';
import fire from '../../fire.js';
import { cleanData } from '../../Utils/helper.js';

class App extends Component {
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
        .then(response => cleanData(response.response.groups[0].items))
        .then(resp => this.props.setLocations(resp));
    });
  }

  fetchhappyhours() {
    const happyHoursFromDB = fire.database().ref('happy-hours');

    happyHoursFromDB.on('value', snapshot => {
      const happyHoursFire = Object.entries(snapshot.val());
      const happyHours = happyHoursFire.map(happyHour => {
        return (
          Object.assign({ fireBaseId: happyHour[0] }, happyHour[1])
        );
      });
      this.props.sendHappyHoursToState(happyHours);
    });
  }

  componentDidMount() {
    this.getLocations('Bars');
    this.fetchhappyhours();
  }

  render() {

    return (
      <div className="App">
        <Route path='/'
          render={() =>[
            <Header key={0} />,
            <NavBar key={1} />
          ]
          }
        />
        <Route exact path='/'
          render={() =>
            <div className='body'>
              <LocationListContainer locations={this.props.locations} />
            </div>  
          }
        />
        <Route exact path='/favorites'
          render={() =>
            <div className='body'>
              <LocationListContainer locations={this.props.favorites} />
            </div>
          }
        />
        <Route exact path='/happyHours'
          render={() =>
            <div className='body'>
              <HappyHourContainer locations={this.props.happyHours} />
            </div>
          }
        />
      </div>
    );
  }
  
}

App.propTypes = {
  setLocations: PropTypes.func,
  count: PropTypes.number,
  locations: PropTypes.array,
  favorites: PropTypes.array,
  happyHours: PropTypes.array,
  sendHappyHoursToState: PropTypes.func
};

const mapSTP = (state) => {
  return {
    locations: state.locations,
    count: state.count,
    favorites: state.favorites,
    happyHours: state.happyHours
  };
};

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

LocationListContainer.propTypes = {
  setLocations: PropTypes.func,
  count: PropTypes.number,
  locations: PropTypes.array,
  favorites: PropTypes.array,
  happyHours: PropTypes.array,
  sendHappyHoursToState: PropTypes.func
};

export default withRouter(connect(mapSTP, mapDTP)(App));


