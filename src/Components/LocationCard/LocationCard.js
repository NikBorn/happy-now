import React, { Component } from 'react';
import { toggleFavorite, removeFavorite, addFavorite, toggleExtended } from '../../actions';
import { switchFavorite, switchExtended } from '../../Utils/helper.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HappyHourForm from '../HappyHourForm/HappyHourForm.js';


class LocationCard extends Component {

  constructor() {
    super();
  }

  componentDidReceiveProps( nextProps) {
   this.props !== nextProps ? true : false
  }

  render() {
    const locationInfo = this.props.locationInfo;
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
        this.props.removeFavorite(location);
      } else {
        this.props.addFavorite(location);
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
      </h5> ;

    const cardExtStyle = locationInfo.isExtended ? 'location-card' : 'location-card-ext location-card' ;

    return (
      <div className={cardExtStyle}
        onClick={event => {
          event.preventDefault();
          this.props.toggleExtended(switchExtended(locationInfo));
        }}
      >
        <div className={cardStyle}>
          <h4>{locationInfo.name}</h4>
          <button className={favStyle}
            onClick={(event) => {
              event.preventDefault();
              handleClick(locationInfo);
              this.props.toggleFavorite(switchFavorite(locationInfo));
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
        
        
        

        <HappyHourForm />
      </div>
  );
};
};


LocationCard.propTypes = {
  locationInfo: PropTypes.object,
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
  toggleFavorite: PropTypes.func
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