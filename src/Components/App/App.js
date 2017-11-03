import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import { setLocations } from '../../actions/index.js';
import { connect } from 'react-redux';
import LocationListContainer from '../LocationListContainer';


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
        </div>  
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