import { ApolloError } from '@apollo/client';

import { useToast } from '@/components/ui/use-toast';

const useErrorHandling = () => {
  const { toast } = useToast();

  return {
    onError: (err: ApolloError) => {
      // CHECK FOR UNAUTHORIZED HERE
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: err.message,
      });
    },
  };
};

export { useErrorHandling };
