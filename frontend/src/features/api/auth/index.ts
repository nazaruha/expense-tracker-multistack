import { useMock } from '@/constants/useMock.ts';

import * as mockApi from './auth.mock.ts';
import * as serverApi from './auth.server.ts';

export const login = useMock ? mockApi.login : serverApi.login;

console.log(`[Auth Feature] Loaded using ${useMock ? 'MOCK' : 'REAL SERVER'} API`);
