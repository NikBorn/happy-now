import firebase from 'firebase';

export const switchFavorite = (locationInfo) => {
  locationInfo.isFavorite = !locationInfo.isFavorite;
  return locationInfo;
};

export const updateUser = (userId, user, userFavorites) => {
  firebase.database().ref('users/' + userId).set({
    user: user.displayName,
    favorites: userFavorites
  });
};
