import React, { Component } from 'react';
import { toggleFavorite, 
  removeFavorite, 
  addFavorite, 
  toggleExtended } from '../../actions';
import { switchFavorite, switchExtended } from '../../Utils/helper.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HappyHourForm from '../HappyHourForm/HappyHourForm.js';
import fire from '../../fire.js';

const LocationCard = (props) => {

  const locationInfo = props.locationInfo;
  
  const locationDirections = `https://maps.google.com/?q=
    ${locationInfo.location.lat},${locationInfo.location.lng}`;

  const cardStyle = locationInfo.isFavorite ? 
    'favorite-card-header card-header' 
    : 
    'card-header';

  const favStyle = locationInfo.isFavorite ? 
    'favorite-button favorite-button-selected' 
    : 
    'favorite-button';

  const handleClick = (location) => {
    if (location.isFavorite) {
      props.removeFavorite(location);
    } else {
      props.addFavorite(location);
    }
  };

  const locationMenu = locationInfo.menu ? 
    <h5 className='menu'>
      <a href={locationInfo.menu.url} className='directions'>
      menu
      </a>
    </h5> 
    : 
    <h5 className='menu'>
      <a href='' className='directions'>
        no menu listed
      </a>
    </h5>;

  const cardExtStyle = locationInfo.isExtended ? 
    'location-card-ext location-card' 
    : 
    'location-card';

  const addFavToFirebase = () => {
    const itemsRef = fire.database().ref('favorites');
    const item = {
      userId: props.activeUser.uid,
      userName: props.activeUser.displayName,
      location: props.locationInfo
    };
    itemsRef.push(item);
  };

  const checkUser = (locationInfo) => {
    if (!props.activeUser) {
      alert('You must sign in to add favorites');
    } else {
      handleClick(locationInfo);
      addFavToFirebase();
      props.toggleFavorite(switchFavorite(locationInfo));
    }
  };

  return (
    <div className={cardExtStyle}
    >
      <div className={cardStyle}>
        <h4>{locationInfo.name}</h4>
        <button className={favStyle}
          onClick={(event) => {
            event.preventDefault();
            checkUser(locationInfo);
          }}>{locationInfo.isFavorite ? 'Unfav' : 'Fav'}</button>
      </div>
      <h5>{locationInfo.contact.formattedPhone || 'No Phone Number Listed'}</h5>
      <h5>{locationInfo.location.formattedAddress[0]}</h5>
      <h5>{locationInfo.location.formattedAddress[1]}</h5>
      <h5>{locationInfo.rating} rating from {locationInfo.ratingSignals} reviews
      </h5>
      {locationMenu}
      <h5 className='directions'>
        <a href={locationDirections}
          className='directions'
          target="_blank">
        directions
        </a>
      </h5>
      {
        locationInfo.isExtended === false &&
        <button
          className='show-more happy-hour-btn'
          onClick={event => {
            event.preventDefault();
            props.toggleExtended(switchExtended(locationInfo));
          }}
        >Add Happy Hour!</button>
      }
      <HappyHourForm locationInfo={locationInfo} />
    </div>
  );
  
};


LocationCard.propTypes = {
  locationInfo: PropTypes.object,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
  toggleFavorite: PropTypes.func,
  toggleExtended: PropTypes.func,
  activeUser: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    favorites: state.favorites,
    activeUser: state.activeUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (location) => {
      dispatch(toggleFavorite(location));
    },
    addFavorite: (location) => {
      dispatch(addFavorite(location));
    },
    removeFavorite: (location) => {
      dispatch(removeFavorite(location));
    },
    toggleExtended: (location) => {
      dispatch(toggleExtended(location));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);