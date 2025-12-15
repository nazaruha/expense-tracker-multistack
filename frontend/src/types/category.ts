import type { TransactionType } from '@/types/transactionType.ts';

export interface ICategory {
  id: number;
  name: string;
  type: TransactionType;
}
