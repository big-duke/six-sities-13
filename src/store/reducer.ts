import { createReducer } from '@reduxjs/toolkit';
import { City, Nullable, Offer, User } from '../types';

import {
  setCity,
  setSortOption,
  setHoverOffer,
  setAuthStatus,
  logout
} from './actions';
import { AuthStatus, SortOption, cities } from '../const';
import { fetchOffers, checkAuth, login } from './api-actions';

type AppState = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  hoverOffer: Nullable<Offer>;
  loading: boolean;
  authStatus: AuthStatus;
  user: Nullable<User>;
  isAuthLoading:boolean;
};

const initialState: AppState = {
  city: cities[0],
  offers: [],
  sortOption: SortOption.Popular,
  hoverOffer: null,
  loading: false,
  authStatus: AuthStatus.Unknown,
  user: null,
  isAuthLoading:false,

};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.loading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.loading = false;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.user = action.payload;
      state.isAuthLoading = false;
    })
    .addCase(checkAuth.pending, (state) => {
      state.isAuthLoading = true;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.isAuthLoading = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Auth;
    })
    .addCase(login.pending, (state) => {
      state.isAuthLoading = true;
    })
    .addCase(login.rejected, (state) => {
      state.isAuthLoading = false;
    })
    .addCase(logout, (state) => {
      state.user = null;
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setHoverOffer, (state, action) => {
      state.hoverOffer = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    });
});
