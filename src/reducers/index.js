import { combineReducers } from 'redux';
import locations from './locations.js';
import userLocation from './userLocation.js';
import activeUser from './activeUser.js';
import count from './count.js';





export default combineReducers({
  locations,
  userLocation,
  activeUser,
  count
});