import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import reducer from './reducer';

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

const UserContextProvider = ({children}: {children: JSX.Element}) => {
  const [user, dispatch] = React.useReducer(reducer, UserSchema);
  React.useEffect(() => {
    if (user.username) {
      AsyncStorage.setItem('userData', JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{user, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
