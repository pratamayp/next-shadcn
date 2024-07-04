import { DocumentNode, QueryHookOptions, useQuery } from '@apollo/client';

import { useErrorHandling } from './use-error-handling';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useQueryService = <TData = any>(
  operation: DocumentNode,
  config: QueryHookOptions<TData>,
) => {
  const { onError } = useErrorHandling();
  return useQuery<TData>(operation, {
    ...config,
    onError,
  });
};
