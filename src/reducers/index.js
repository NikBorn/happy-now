import { combineReducers } from 'redux';
import locations from './locations.js';
import userLocation from './userLocation.js';
import activeUser from './activeUser.js';




export default combineReducers({
  locations,
  userLocation,
  activeUser
});