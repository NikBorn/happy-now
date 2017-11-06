import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import { setLocations } from '../../actions/index.js';
import { connect } from 'react-redux';
import LocationListContainer from 
  '../LocationListContainer/LocationListContainer.js';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';


const App = () => {

  return (
    <div className="App">
      <Route path='/'
        render={() =>
          <Header />}
      />
      <Route exact path='/'
        render={() =>
          <div className='body'>
            <LocationListContainer />
          </div>  
        }
      />
    </div>
  );
}


export default withRouter(App);
// export default App;