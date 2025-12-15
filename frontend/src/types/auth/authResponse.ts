import type { IUser } from '@/types/user.ts';

export interface IAuthResponse {
  token: string;
  user: IUser;
}
