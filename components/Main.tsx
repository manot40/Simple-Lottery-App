import React from 'react';
import {View} from 'native-base';
import {Login, Home, Shuffle, BottomNav, Leaderboard, Account} from './';
import UserContextProvider from './UserContext';

export const ViewContext = React.createContext({
  view: '',
  setView(_args: string) {},
});

export default () => {
  const [view, setView] = React.useState('Login');
  function currentView() {
    switch (view) {
      case 'Login':
        return <Login />;
      case 'Home':
        return <Home />;
      case 'Shuffle':
        return <Shuffle />;
      case 'Leaderboard':
        return <Leaderboard />;
      case 'Account':
        return <Account />;
      default:
        return <View />;
    }
  }

  return (
    <ViewContext.Provider value={{view, setView}}>
      <UserContextProvider>{currentView()}</UserContextProvider>
      {view !== 'Login' && <BottomNav />}
    </ViewContext.Provider>
  );
};
