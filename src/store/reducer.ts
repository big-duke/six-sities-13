import { createReducer } from '@reduxjs/toolkit';
import { City, Nullable, Offer } from '../types';

import { offers } from '../mocks/offers';

import { fetchOffers, setCity, setSortOption, setHoverOffer } from './actions';
import { SortOption, cities } from '../const';

type AppState = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  hoverOffer: Nullable<Offer>
};

const initialState: AppState = {
  city: cities[0],
  offers: [],
  sortOption:SortOption.Popular,
  hoverOffer:null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setHoverOffer, (state, action) => {
      state.hoverOffer = action.payload;
    });
});
