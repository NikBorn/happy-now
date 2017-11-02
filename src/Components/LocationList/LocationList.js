import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';


const  LocationList = (props) => {
  const listObjs = props.locations.map(locationInfo => {
    return <LocationCard 
      key={locationInfo.id} 
      locationInfo = { locationInfo } />;
  }); 

  return (
    <div className='location-list'>
      { listObjs }
    </div>
  );
};



export default LocationList;