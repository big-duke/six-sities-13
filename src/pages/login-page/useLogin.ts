import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { asyncActions, selectors } from '../../store';
import { Auth } from '../../types';
import { useAuth } from '../../hooks/auth';


type LoginController = {
  isAuth:boolean;
  isAuthLoading:boolean;
  handleLogin:(e:FormEvent<HTMLFormElement>) =>void;
}

export const useLogin = ():LoginController => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const isAuthLoading = useAppSelector(selectors.getAuthLoading);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Auth;
    dispatch(asyncActions.login(data));
  };

  return {isAuth, isAuthLoading, handleLogin};
};
