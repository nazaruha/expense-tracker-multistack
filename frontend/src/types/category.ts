import type { TransactionType } from './transactionType.ts';

export interface ICategory {
  id: number;
  name: string;
  type: TransactionType;
}
