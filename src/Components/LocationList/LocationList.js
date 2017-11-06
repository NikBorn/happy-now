import React from 'react';
import LocationCard from '../LocationCard/LocationCard.js';
import PropTypes from 'prop-types';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton.js';



const  LocationList = (props) => {

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
  });
  
  return (
    <div className='location-list'>
      {displayLocationCards }
      <ShowMoreButton />
    </div>
  );
};

LocationList.propTypes = {
  locations: PropTypes.array,
  count: PropTypes.number
};


export default LocationList;