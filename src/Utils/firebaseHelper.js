import fire from '../fire.js';


export const addFavToFirebase = (uid, displayName, locationInfo) => {
  const itemsRef = fire.database().ref('favorites');
  const item = {
    userId: uid,
    userName: displayName,
    location: locationInfo
  };
  itemsRef.push(item);
};