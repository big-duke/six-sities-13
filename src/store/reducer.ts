import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types';

import { offers } from '../mocks/offers';

import { fetchOffers, setCity } from './actions';
import { cities } from '../const';

type AppState = {
  city: City;
  offers: Offer[];
};

const initialState: AppState = {
  city: cities[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    });
});
