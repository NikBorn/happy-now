import React, { Component } from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import { connect } from 'react-redux';


const  LocationList = (props) => {

  const listObjs = props.locations.map(locationInfo => {
    return <LocationCard locationInfo = { locationInfo } />
  }) 


  return (
    <div>
      { listObjs }
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, null)(LocationList)