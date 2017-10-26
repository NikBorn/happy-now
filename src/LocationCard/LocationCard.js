import React from 'react';

const LocationCard = ({locationInfo}) => {
  console.log(locationInfo)

  return (
    <div>
      <h4>{locationInfo.name}</h4>
      <h6>{locationInfo.contact.formattedPhone}</h6>
      <h6>{locationInfo.rating}/{locationInfo.ratingSignals}</h6>
      <button>Fav</button>
    </div>
  )
}

export default LocationCard;