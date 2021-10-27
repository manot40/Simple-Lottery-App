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
    case 'SET_USER':
      return {
        ...action.user,
      };
    default:
      throw new Error('Reducer Action Expected');
  }
};

export default reducer;
