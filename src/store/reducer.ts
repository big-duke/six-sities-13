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
import { fetchOffers, fetchOffer, checkAuth, login } from './api-actions';
import { OfferDetail } from '../types/offer';

type AppState = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  hoverOffer: Nullable<Offer>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  authStatus: AuthStatus;
  user: Nullable<User>;
  isAuthLoading:boolean;
  offerDetail: Nullable<OfferDetail>;
};

const initialState: AppState = {
  authStatus: AuthStatus.Unknown,
  city: cities[0],
  hoverOffer: null,
  isAuthLoading:false,
  status: 'idle',
  offerDetail: null,
  offers: [],
  sortOption: SortOption.Popular,
  user: null,

};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.offers = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.status = 'failed';
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.offerDetail = action.payload;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.status = 'failed';
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
