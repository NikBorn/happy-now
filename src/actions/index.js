export const setLocations = (locations) => {
  return {
    type: 'SET_LOCATIONS',
    locations
  }
}

export const toggleFavorite = (location) => {
  return {
    type: 'TOGGLE_FAVORITE',
    location
  }
}

export const setActiveuser = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    user
  }
}


// export const getUserLocation = (callback) => {
//   navigator.geolocation.getCurrentPosition(function (location) {
//     callback(location.coords.latitude + ',' + location.coords.longitude);
//   });
// };

// export const fetchLocations = (query) => {

//   const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

//   return (dispatch) => {

//     getUserLocation((latlong) => {

//     const params = {
//       client_id: '20SGZBSFIJ2PAEM2E53DTZNVFZ5K1E4GHCNBKTXM14JVDKBD',
//       client_secret: 'C10LMFZC53BRQNH3CJ50SBWJLVWIPTQI4WYPKMPGYE0KZAXB',
//       limit: 100,
//       query: query,
//       v: '20130619',
//       ll: latlong
//     };

//     return fetch(venuesEndpoint + new URLSearchParams(params), {
//       method: 'GET'
//     })
//       .then(response => response.json())
//       .then(response => response.response.groups[0].items)
//       .then(res => {
//         return res.map(place => {
//           return Object.assign({ isFavorite: false }, place.venue);
//         });
//       })
//       .then(resp => console.log(resp));
//   });
// };