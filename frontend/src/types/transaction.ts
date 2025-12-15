import type { ICategory } from './category.ts';

export interface ITransaction {
  id: number;
  amount: number;
  description: string | null;
  date: string;
  category: ICategory;
}
