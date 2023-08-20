import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../types';
import { APIRoute } from '../services/router';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {extra: AxiosInstance}>
(
  'app/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);
