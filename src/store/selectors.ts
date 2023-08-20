import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const getCity = (state: RootState) => state.city;
export const getOffers = (state: RootState) => state.offers;
export const getSortOption = (state: RootState) => state.sortOption;
export const getHoverOffer = (state: RootState) => state.hoverOffer;
export const getLoadingStatus = (state: RootState) => state.loading;

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

