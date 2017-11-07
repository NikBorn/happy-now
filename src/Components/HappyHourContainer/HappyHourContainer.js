import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const HappyHourContainer = () => {
  const happyHoursArray = this.props.happyHours.map(happyHour=> {
    return (
      <HappyHourCard key={happyHour.locationId} happyHourInfo={happyHour} />
    )
  })

  return (
    <div className='happy-hour-cntr'>
      { happyHoursArray }
    </div>
  )

}

HappyHourContainer.propTypes = {
  happyHours: state.happyHours
};

const mapStateToProps = (state) => {
  return {
    happyHours: state.happyHours
  }
}

export default connect(mapStateToProps, null)(HappyHourContainer)