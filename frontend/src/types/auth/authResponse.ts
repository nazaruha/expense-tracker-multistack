import type { IUser } from '../user.ts';

export interface IAuthResponse {
  token: string;
  user: IUser;
}
