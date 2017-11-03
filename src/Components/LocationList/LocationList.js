import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';


const  LocationList = (props) => {
  console.log('count: ', props.count)

  const listObjs = props.locations.map(locationInfo => {
    return <LocationCard 
      key={locationInfo.id} 
      locationInfo = { locationInfo } />;
  }); 

  const displayLocationCards = listObjs.filter((location, index) => {
    if (index < props.count) {
      return location;
    } else {
      return null;
    }
  })
  
  return (
    <div className='location-list'>
      {displayLocationCards }
    </div>
  );
};



export default LocationList;