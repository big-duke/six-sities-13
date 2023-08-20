import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { Auth, Offer, User } from '../types';
import { APIRoute } from '../const';
import { saveToken } from '../services/token';
import { toast } from 'react-toastify';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>('app/fetchOffers', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  } catch (error) {
    toast.error('Не удалось загрузить предложения с сервера. Попробуйте позже');
    throw error;
  }

});

export const checkAuth = createAsyncThunk<
  User,
  undefined,
  { extra: AxiosInstance }
>('app/checkAuth', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code !== 'ERR_BAD_REQUEST') {
        toast.error('Не удалось проверить авторизацию на сайте. Попробуйте позже');
      }
    }


    throw error;
  }

});

export const login = createAsyncThunk<User, Auth, { extra: AxiosInstance }>(
  'app/login',
  async ({ email, password }, { extra: api }) => {
    try {
      const { data } = await api.post<User>(APIRoute.Login, { email, password });
      saveToken(data.token);
      return data;
    } catch (error) {
      toast.error('Не удалось залогиниться на сайте. Попробуйте позже');
      throw error;
    }
  }
);
