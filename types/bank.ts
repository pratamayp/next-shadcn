import { BaseResponse } from '.';

export interface Bank {
  id: string;
  name: string;
}

export interface ListBank extends BaseResponse {
  banks: Bank[];
}

export interface ListBankResponse {
  ListBank: ListBank;
}
