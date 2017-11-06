import React from 'react';

export const cardStyle = (isFavorite) => {
  const isFavortited = isFavorite ?
    'favorite-card-header card-header'
    :
    'card-header';
  return isFavortited;

}; 

export const handleClick = (location, props) => {
  if (location.isFavorite) {
    return props.removeFavorite(location);
  } else {
    return props.addFavorite(location);
  }
};

export const favStyle = (isFavorite) => {
  const style = isFavorite ?
    'favorite-button favorite-button-selected'
    :
    'favorite-button';
  return style;
}; 

export const cardExtStyle = (isExtended) => {
  const showExt = isExtended ?
    'location-card-ext location-card'
    :
    'location-card';

  return showExt;
};


export const locationMenu = (locationInfo)=> {
  const hasMenu = locationInfo.menu ?
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
  return hasMenu;
}; 