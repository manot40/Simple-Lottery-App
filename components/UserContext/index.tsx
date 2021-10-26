import React from 'react';
import reducer from './reducer';

export const defaultUser: IUser = {
  username: 'user',
  fullname: 'John Doe',
  password: 'user123',
  totalWin: 0,
  totalLose: 0,
  records: [],
};
export const UserSchema: IUser = {
  username: '',
  fullname: '',
  totalWin: 0,
  totalLose: 0,
  records: [],
};

export const UserContext = React.createContext({
  user: UserSchema,
  dispatch: (_action: IUserAction) => {},
});

const UserContextProvider = ({children}: any) => {
  const [user, dispatch] = React.useReducer(reducer, defaultUser);

  return (
    <UserContext.Provider value={{user, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
