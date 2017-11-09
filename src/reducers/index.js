import { combineReducers } from 'redux';
import locations from './locations.js';
import activeUser from './activeUser.js';
import count from './count.js';
import favorites from './favorites.js';
import happyHours from './happyHours.js';

export default combineReducers({
  locations,
  activeUser,
  count,
  favorites,
  happyHours
});

