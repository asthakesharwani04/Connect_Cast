 import { signup } from '../lib/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useSignUp = () => {
    const queryClient = useQueryClient(); 

  const {
    mutate: mutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] }); //invalidateQueries is used to refetch the authUser query by marking current data as stale
    },
  });

  return { isPending, error, signupMutation: mutate };
};

export default useSignUp;
