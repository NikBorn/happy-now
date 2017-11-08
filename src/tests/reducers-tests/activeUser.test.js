import activeUser from '../../reducers/activeUser.js';
import mockUser from '../../Utils/mockData.js';

describe('activeUser reducer', () => {

  it('should return a default state of NULL and also NULL on sign out', () => {
    const expectation = null;
    expect(activeUser(undefined, {})).toEqual(expectation);
  });

  it('shold add an active user to State', () => {
    const expectation = mockUser;
    const action = {type: 'SET_ACTIVE_USER', mockUser};
    expect(activeUser(undefined, action)).toEqual(expectation);
  });
  
});