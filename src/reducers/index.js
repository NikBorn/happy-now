import { combineReducers } from 'redux';
import locations from './locations.js';
import userLocation from './userLocation.js';
import activeUser from './activeUser.js';
import count from './count.js';
import favorites from './favorites.js';
import showFavorites from './showFavorites.js';
import happyHours from './happyHours.js';







export default combineReducers({
  locations,
  userLocation,
  activeUser,
  count,
  favorites,
  showFavorites,
  happyHours
});

