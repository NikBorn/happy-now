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


// export const addFavToFirebase = (event) => {
//   const itemsRef = firebase.database().ref('favorites');
//   const item = {
//     userName: props.activeUser.contactName,
//     userId: props.activeUser.uid,
//     location: props.locationInfo
//   };
//   itemsRef.push(item);
// };