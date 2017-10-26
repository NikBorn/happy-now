import React from 'react';
import { toggleFavorite } from '../actions';
import { switchFavorite } from '../Utils/fourSquareAPI';
import { connect } from 'react-redux';


const LocationCard = (props) => {
  const locationInfo = props.locationInfo;
  const cardStyle = locationInfo.isFavorite ? 'favorite-card' : 'location-card';

  return (
    <div className={ cardStyle }>
      <h4>{locationInfo.name}</h4>
      <h6>{locationInfo.contact.formattedPhone}</h6>
      <h6>{locationInfo.rating}/{locationInfo.ratingSignals}</h6>
      <button onClick={(event) => {
        event.preventDefault();
        props.toggleFavorite(switchFavorite(locationInfo));
      }}>Fav</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (locations) => {
      dispatch(toggleFavorite(locations));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);