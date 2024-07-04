import { ApolloError } from '@apollo/client';

const useErrorHandling = () => {
  return {
    onError: (err: ApolloError) => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      // CHECK FOR UNAUTHORIZED HERE
      // TOAST HERE
    },
  };
};

export { useErrorHandling };
