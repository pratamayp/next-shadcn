'use client';

import React from 'react';

import { DataTable } from '@/components/table';
import { BANK } from '@/graphql/bank';
import { useQueryService } from '@/hooks/use-graphql';
import { ListBankResponse } from '@/types/bank';

import { columns } from './columns';

export const ListBank = () => {
  const [input] = React.useState({
    pages: 1,
    limit: 25,
    search: {
      keyword: '',
    },
  });

  const { data, loading } = useQueryService<ListBankResponse>(BANK.LIST, {
    variables: {
      input,
    },
  });

  if (loading) return 'Loading....';

  return (
    <div>
      <DataTable columns={columns} data={data?.ListBank.banks ?? []} />
    </div>
  );
};
