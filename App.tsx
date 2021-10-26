import React from 'react';
import Main from './components/Main';
import {BackHandler} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import useDoublePress from './hooks/useDoublePress';

export default function () {
  useDoublePress(() => {
    BackHandler.exitApp();
  });
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}
