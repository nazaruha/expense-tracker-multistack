import type { AxiosResponse } from 'axios';

import { api } from '@/lib/axiosSingleton.ts';
import type { IAuthResponse } from '@/types/auth/authResponse.ts';

// API doesn't work yet
export const login = async (data: { email: string; password: string }): Promise<IAuthResponse> => {
  const response: AxiosResponse<IAuthResponse> = await api.post<IAuthResponse>('/auth/login', data);
  return response.data;
};
