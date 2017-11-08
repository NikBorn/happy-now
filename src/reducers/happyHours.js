const happyHours = (state=[], action) => {
  switch (action.type) {
  case 'SET_HAPPY_HOURS':
    return action.happyHours;
  default: 
    return state;
  }
};

export default happyHours;