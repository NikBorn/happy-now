import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import LocationList from '../LocationList/LocationList.js';
import { googleAPIKey, fourSquareClientId, fourSquareClientSecret } from '../Utils/APIKeys.js';
import { setLocations } from '../actions/index.js';
import { connect } from 'react-redux';
import { getLocations } from '../Utils/fourSquareAPI.js';
import { mockLocationsResponse } from '../Utils/mockData'



class App extends Component {
  constructor() {
    super()
    this.state = {
      venues: []
    }
  }

  handleSubmit(query) {
    this.getClosestVenues(query);
  }

  fetchLocations () {
   return getLocations('Bars')
  }
  
  componentDidMount () {
   this.fetchLocations()
   console.log(mockLocationsResponse)
   const mockArray = mockLocationsResponse
   this.props.setLocations(mockArray)
  //  .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <Header />
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
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)