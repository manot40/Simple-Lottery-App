import React from 'react';
import Main from './components/Main';
import {BackHandler} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import useDoublePress from './hooks/useDoublePress';
import UserContextProvider from './components/UserContext';

export default function () {
  useDoublePress(() => {
    BackHandler.exitApp();
  });
  return (
    <NativeBaseProvider>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
    </NativeBaseProvider>
  );
}
