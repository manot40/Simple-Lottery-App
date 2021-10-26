const reducer = (state: IUser, action: IUserAction): IUser => {
  const records = !action.record
    ? [...state.records]
    : [...state.records, action.record];
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
    case 'SET_USER':
      return {
        ...state,
        ...action.user,
      };
    default:
      throw new Error('Reducer Action Expected');
  }
};

export default reducer;
