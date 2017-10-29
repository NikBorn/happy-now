import React from 'react';
import { toggleFavorite } from '../../actions';
import { switchFavorite } from '../../Utils/helper';
import { connect } from 'react-redux';


const LocationCard = (props) => {
  const locationInfo = props.locationInfo;
  const cardStyle = locationInfo.isFavorite ? 'favorite-card-header card-header' : 'card-header';
  console.log(locationInfo)
  return (
    <div className='location-card'>
      <div className={cardStyle}>
        <h4>{locationInfo.name}</h4>
      </div>
      <h6>{locationInfo.contact.formattedPhone}</h6>
      <h6>{locationInfo.location.formattedAddress[0]}</h6>
      <h6>{locationInfo.location.formattedAddress[1]}</h6>
      <h5>{locationInfo.rating}/{locationInfo.ratingSignals}</h5>
      
      <button onClick={(event) => {
        event.preventDefault();
        props.toggleFavorite(switchFavorite(locationInfo));
      }}>{locationInfo.isFavorite ? 'unFav' : 'Fav' }</button>
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