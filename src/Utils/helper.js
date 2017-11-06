import firebase from 'firebase';

export const switchFavorite = (locationInfo) => {
  locationInfo.isFavorite = !locationInfo.isFavorite;
  return locationInfo;
};

export const updateUser = (userId, favorites) => {
  firebase.database().ref('users/' + userId).set({
    user: userId,
    favorites: favorites
  });
};

export const switchExtended = (locationInfo) => {
  locationInfo.isExtended = !locationInfo.isExtended;
  return locationInfo;
};

export const handleClick = (location, props) => {
  if (location.isFavorite) {
    return props.removeFavorite(location);
  } else {
    return props.addFavorite(location);
  }
};