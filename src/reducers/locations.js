const locations = (state = [], action) => {
  switch (action.type) {
  case 'SET_LOCATIONS' : 
    return action.locations;
  case 'TOGGLE_FAVORITE': 
    let oldState = [...state];
    oldState.splice(oldState.indexOf(action.location), 1, action.location);
    return oldState;
  case 'TOGGLE-EXTENDED-CARD': 
    let previousState = [...state];
    previousState.splice(previousState.indexOf(action.location), 1, action.location);
  default: 
    return state;
  }
};

export default locations;