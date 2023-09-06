import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { Auth, Offer, User } from '../types';
import { APIRoute } from '../const';
import { saveToken } from '../services/token';
import { toast } from 'react-toastify';
import { OfferDetail } from '../types/offer';
import { generatePath } from 'react-router-dom';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>('app/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  return data;
});

export const fetchOffer = createAsyncThunk<
  OfferDetail,
  { id: string },
  { extra: AxiosInstance; rejectWithValue: AxiosError }
>('app/fetchOffer', async ({ id }, { extra: api }) => {

  const { data } = await api.get<OfferDetail>(generatePath(APIRoute.Offer, { id }));
  return data;

});

export const checkAuth = createAsyncThunk<
  User,
  undefined,
  { extra: AxiosInstance }
>('app/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<User>(APIRoute.Login);
  return data;
});

export const login = createAsyncThunk<User, Auth, { extra: AxiosInstance }>(
  'app/login',
  async ({ email, password }, { extra: api }) => {
    try {
      const { data } = await api.post<User>(APIRoute.Login, { email, password });
      saveToken(data.token);
      return data;
    } catch (err){
      toast.error('Не удалось залогиниться на сайте. Попробуйте позже');
      throw err;
    }
  }
);
