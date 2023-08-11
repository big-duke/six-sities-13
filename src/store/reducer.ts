import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types';

import { offers } from '../mocks/offers';

import { fetchOffers, setCityName } from './actions';

type AppState = {
  cityName: string;
  offers: Offer[];
};

const initialState: AppState = {
  cityName: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setCityName, (state, action) => {
      state.cityName = action.payload;
    });
});
