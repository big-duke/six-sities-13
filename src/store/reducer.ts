import { createReducer } from '@reduxjs/toolkit';
import { City, Nullable, Offer } from '../types';

import { setCity, setSortOption, setHoverOffer } from './actions';
import { SortOption, cities } from '../const';
import { fetchOffersAction } from './api-actions';

type AppState = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  hoverOffer: Nullable<Offer>;
  loading:boolean;
};

const initialState: AppState = {
  city: cities[0],
  offers: [],
  sortOption: SortOption.Popular,
  hoverOffer: null,
  loading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.loading = false ;
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.loading = false;
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
