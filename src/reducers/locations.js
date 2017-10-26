const locations = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOCATIONS' : 
    console.log(action.locations)
    return action.locations;
    default: 
      return state;
  }
}

export default locations;