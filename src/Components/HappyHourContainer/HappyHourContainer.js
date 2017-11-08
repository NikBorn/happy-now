import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HappyHourCard from '../HappyHourCard/HappyHourCard.js';
import LoadingScreen from '../LoadingScreen/LoadingScreen';




const HappyHourContainer = (props) => {

  const happyHoursArray = props.locations.map(happyHour=> {
    return (
      <HappyHourCard key={happyHour.locationId} happyHourInfo={happyHour} />
    )
  })

  const happyHourDisplay = props.locations.length ? happyHoursArray : <LoadingScreen />;

  return (
    <div className='happy-hour-cntr'>
      { happyHourDisplay }
    </div>
  )
}

HappyHourContainer.propTypes = {
  locations: PropTypes.array
};


export default HappyHourContainer;