
export const getUserLocation = (callback) => {
  navigator.geolocation.getCurrentPosition(function (location) {
    callback(location.coords.latitude + ',' + location.coords.longitude);
  });
};

export const getLocations = (query) => {

  const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

  return getUserLocation(function (latlong) {

    const params = {
      client_id: '20SGZBSFIJ2PAEM2E53DTZNVFZ5K1E4GHCNBKTXM14JVDKBD',
      client_secret: 'C10LMFZC53BRQNH3CJ50SBWJLVWIPTQI4WYPKMPGYE0KZAXB',
      limit: 100,
      query: query,
      v: '20130619',
      ll: latlong
    };

    return fetch(venuesEndpoint + new URLSearchParams(params), {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => response.response.groups[0].items)
      .then(res => {
        return res.map(place=> {
          return Object.assign({isFavorite: false}, place.venue);
        });  
      })
      .then(resp => console.log(resp));
  });
};

export const switchFavorite = (locationInfo) => {
  locationInfo.isFavorite = !locationInfo.isFavorite;
  return locationInfo;
};


