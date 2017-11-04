export const setLocations = (locations) => {
  return {
    type: 'SET_LOCATIONS',
    locations
  };
};

export const toggleFavorite = (location) => {
  return {
    type: 'TOGGLE_FAVORITE',
    location
  };
};

export const setActiveuser = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    user
  };
};

export const increaseCount = () => {
  return {
    type: 'INCREASE_COUNT'
  };
};

export const addFavorite = (location) => {
  return {
    type: 'ADD_FAVORITE',
    location
  };
};

export const removeFavorite = (location) => {
  return {
    type: 'REMOVE_FAVORITE',
    location
  };
};

export const toggleShowFavorites = (bool) => {
  return {
    type: 'TOGGLE_SHOW_FAVORITES',
    bool
  }
}

export const toggleExtended = (location) => {
  return {
    type: 'TOGGLE-EXTENDED-CARD',
    location
  }
}

