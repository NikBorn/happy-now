import { combineReducers } from 'redux';
import locations from './locations.js';
import userLocation from './userLocation.js';



export default combineReducers({
locations,
userLocation,
});