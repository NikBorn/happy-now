const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE': 
    return [...state, action.location];
  default:
    return state;
  case 'REMOVE_FAVORITE':
    return state.filter(location => location.id !== action.location.id)
  }
};

export default favorites;