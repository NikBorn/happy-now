const showFavorites = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_SHOW_FAVORITES':
    return action.bool;
  default:
    return state;
  }
};

export default showFavorites;