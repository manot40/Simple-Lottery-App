/* eslint-disable curly */
import {BackHandler, Platform, ToastAndroid} from 'react-native';

let currentCount = 0;
export default (exitHandler?: () => void) => {
  if (Platform.OS === 'ios') return;
  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    if (currentCount === 1) {
      typeof exitHandler !== 'undefined'
        ? exitHandler()
        : subscription.remove();
      return true;
    }
    backPressHandler();
    return true;
  });
};

const backPressHandler = () => {
  if (currentCount < 1) {
    currentCount++;
    ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
  }
  setTimeout(() => {
    currentCount = 0;
  }, 2000);
};
