import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import LocationList from '../LocationList/LocationList.js';
import { googleAPIKey, fourSquareClientId, fourSquareClientSecret } from '../Utils/APIKeys.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LocationList />
        
      </div>
    );
  }
}

export default App;
