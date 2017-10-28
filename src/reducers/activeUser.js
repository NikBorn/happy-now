const activeUser = (state = null, action) => {
  console.log(action)
  switch (action.type) {
  case 'SET_ACTIVE_USER':
  // console.log('USER!')
    return action.user;
  default:
    return state;
  }
}

export default activeUser;





