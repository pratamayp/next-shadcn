import { BaseResponse, SearchInput } from '.';
import { SortByType } from './enum';

export enum OrderBankType {
  CREATED_AT = 'CREATED_AT',
}

export interface Bank {
  id: string;
  name: string;
}

export interface OrderBankInput {
  sortBy: SortByType;
  orderBy: OrderBankType;
}

export interface ListBankInput {
  page: number;
  limit: number;
  search: SearchInput;
  order: OrderBankInput;
}

export interface ListBank extends BaseResponse {
  banks: Bank[];
}

export interface ListBankResponse {
  ListBank: ListBank;
}
