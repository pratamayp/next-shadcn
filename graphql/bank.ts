import { gql } from '@apollo/client';

export const BANK = {
  LIST: gql`
    query ListBank($input: ListBankInput!) {
      ListBank(input: $input) {
        page
        limit
        total
        totalPage
        banks {
          id
          name
        }
      }
    }
  `,
  CREATE: gql`
    mutation CreateBank($input: CreateBankInput!) {
      CreateBank(input: $input) {
        id
      }
    }
  `,
  UPDATE: gql`
    mutation UpdateBank($input: UpdateBankInput!) {
      UpdateBank(input: $input) {
        id
      }
    }
  `,
  DELETE: gql`
    mutation DeleteBank($id: String!) {
      DeleteBank(id: $id) {
        id
      }
    }
  `,
};
