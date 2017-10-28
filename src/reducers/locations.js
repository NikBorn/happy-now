const locations = (state = [], action) => {
  switch (action.type) {
  case 'SET_LOCATIONS' : 
    return action.locations;
  case 'TOGGLE_FAVORITE': 
    const oldState = [...state];
    oldState.splice(oldState.indexOf(action.location), 1, action.location);
    return oldState;
  default: 
    return state;
  }
};

export default locations;