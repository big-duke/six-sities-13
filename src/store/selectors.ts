import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const getCity = (state: RootState) => state.city;
export const getOffers = (state: RootState) => state.offers;
export const getOfferDetail = (state: RootState) => state.offerDetail;
export const getSortOption = (state: RootState) => state.sortOption;
export const getHoverOffer = (state: RootState) => state.hoverOffer;
export const getLoadingStatus = (state: RootState) => state.status;
export const getAuthStatus = (state: RootState) => state.authStatus;
export const getAuthLoading = (state: RootState) => state.isAuthLoading;
export const getUser = (state: RootState) => state.user;


export const getOffersByCity = createSelector(
  [getCity, getOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name)
);
export const getPointsByCity = createSelector(getOffersByCity, (offers) =>
  offers.map(({ id, location}) => ({
    latitude: location.latitude,
    longitude: location.longitude,
    id
  }))
);

