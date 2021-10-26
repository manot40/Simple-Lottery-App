declare interface IUserAction {
  type: string;
  user?: IUser;
  record?: IUserRecord;
}

declare interface IUserRecord {
  date: string;
  win: boolean;
  selectedNumber: number;
  prizeNumber: number;
}

declare interface IUser {
  username: string;
  fullname: string;
  password?: string;
  totalWin: number;
  totalLose: number;
  records: IUserRecord[];
}
