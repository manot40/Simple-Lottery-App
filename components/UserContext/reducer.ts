import {UserSchema} from './';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state: IUser, action: IUserAction): IUser => {
  const records = !action.record
    ? [...state.records]
    : [action.record, ...state.records];
  switch (action.type) {
    case 'WIN':
      return {
        ...state,
        totalWin: (state.totalWin += 1),
        records,
      };
    case 'LOSE':
      return {
        ...state,
        totalLose: (state.totalLose += 1),
        records,
      };
    case 'DISCARD_USER':
      AsyncStorage.removeItem('userData');
      return {...UserSchema};
    case 'SET_USER':
      return !action.user ? {...state} : {...action.user};
    default:
      throw new Error('Reducer Action Expected');
  }
};

export default reducer;
