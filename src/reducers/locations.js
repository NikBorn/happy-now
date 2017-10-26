const locations = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOCATIONS' : 
    return action.locations;
    case 'TOGGLE_FAVORITE': 
      console.log(action)
    
      const oldState = [...state]
      const favIndex = oldState.indexOf(action.location)
      console.log(oldState)
      oldState.splice(favIndex, 1, action.location)
      console.log(oldState)
      return oldState;
    default: 
      return state;
  }
}

export default locations;