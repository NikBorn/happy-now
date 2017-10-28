import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import LocationList from '../LocationList/LocationList.js';
// import { googleAPIKey, fourSquareClientId, fourSquareClientSecret } from '../Utils/APIKeys.js';
import { setLocations } from '../../actions/index.js';
import { connect } from 'react-redux';
import { getLocations } from '../../Utils/fourSquareAPI.js';
import { mockLocationsResponse } from '../../Utils/mockData';
import fire from '../../fire.js';
import SignIn from '../SignIn/SignIn.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }

  fetchLocations () {
    getLocations('Bars');
    //  .then(response => console.log(response.response.groups[0].items))
  //  .then(res => console.log(res))
  }
  
  componentDidMount () {
    this.fetchLocations();
   
    this.props.setLocations(mockLocationsResponse);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        {
          this.props.locations.length &&
        <LocationList />
        }
        
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
    locations: state.locations
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);