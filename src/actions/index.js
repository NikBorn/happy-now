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