const happyHours = (state=[], action) => {
  console.log(action);
  switch (action.type) {
  case 'SET_HAPPY_HOURS':
    return action.happyHours;
  default: 
    return state;
  }
};

export default happyHours;