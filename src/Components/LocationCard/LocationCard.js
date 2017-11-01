import React from 'react';
import { toggleFavorite, removeFavorite, addFavorite } from '../../actions';
import { switchFavorite, updateUser } from '../../Utils/helper';
import { connect } from 'react-redux';


const LocationCard = (props) => {
  const locationInfo = props.locationInfo;
  const cardStyle = locationInfo.isFavorite ? 'favorite-card-header card-header' : 'card-header';
  const favStyle = locationInfo.isFavorite ? 'favorite-button favorite-button-selected' : 'favorite-button';

  const handleClick = (location) => {
    const userFavs = props.favorites
    if (location.isFavorite) {
      props.removeFavorite(location)
      // props.updateUser()
    } else {
      props.addFavorite(location)
    }
  }

  return (
    <div className='location-card'>
      <div className={cardStyle}>
        <h4>{locationInfo.name}</h4>
      </div>
      <h6>{locationInfo.contact.formattedPhone}</h6>
      <h6>{locationInfo.location.formattedAddress[0]}</h6>
      <h6>{locationInfo.location.formattedAddress[1]}</h6>
      <h5>{locationInfo.rating} rating from {locationInfo.ratingSignals} reviews</h5>
      
      
      <button className={favStyle}
        onClick={(event) => {
          event.preventDefault();
          handleClick(locationInfo);
          console.log(props.favorites)
          props.toggleFavorite(switchFavorite(locationInfo));
        }}>{locationInfo.isFavorite ? 'Unfav' : 'Fav' }</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (location) => {
      dispatch(toggleFavorite(location));
    },
    addFavorite: (location) => {
      dispatch(addFavorite(location))
    },
    removeFavorite: (location) => {
      dispatch(removeFavorite(location))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);