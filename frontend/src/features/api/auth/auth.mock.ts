import type { IAuthResponse } from '@/types/auth/authResponse.ts';
import { delay } from '@/utils/delay';

export const login = async (data: { email: string; password: string }): Promise<IAuthResponse> => {
  await delay(1500);

  if (data.email === 'error@test.com') {
    throw new Error('Invalid credentials');
  }

  return {
    token: 'fake-jwt-token-12345',
    user: { id: 1, email: data.email },
  };
};
