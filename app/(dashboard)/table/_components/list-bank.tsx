'use client';

import React from 'react';

import { DataTable } from '@/components/table';
import { BANK } from '@/graphql/bank';
import { useQueryService } from '@/hooks/use-graphql';
import { ListBankInput, ListBankResponse, OrderBankType } from '@/types/bank';
import { SortByType } from '@/types/enum';

import { columns } from './columns';

export const ListBank = () => {
  const [pagination, setPagination] = React.useState<ListBankInput>({
    page: 1,
    limit: 10,
    search: {
      keyword: '',
    },
    order: {
      orderBy: OrderBankType.CREATED_AT,
      sortBy: SortByType.ASC,
    },
  });

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      page: newPage + 1,
    }));
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      limit: newPageSize,
    }));
  };

  const { data, loading } = useQueryService<ListBankResponse>(BANK.LIST, {
    variables: {
      input: pagination,
    },
  });

  if (loading) return 'Loading....';

  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.ListBank.banks ?? []}
        pagination={{
          pageIndex: (data?.ListBank.page ?? 1) - 1,
          pageSize: data?.ListBank.limit ?? 0,
          total: data?.ListBank.total ?? 0,
          totalPage: data?.ListBank.totalPage ?? 0,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange,
        }}
      />
    </div>
  );
};
