const count = (state=10, action ) => {
  switch (action.type) {
  case 'INCREASE_COUNT': {
    const newState = state + 10;
    return newState;
  }
  default:
    return state;
  }
};

export default count;