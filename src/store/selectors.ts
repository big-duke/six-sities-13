/* eslint-disable @typescript-eslint/no-shadow */
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const cityName = (state: RootState) => state.cityName;
export const offers = (state: RootState) => state.offers;

export const offersByCity = createSelector(
  [cityName, offers],
  (cityName, offers) => offers.filter((offer) => offer.city.name === cityName)
);
export const pointsByCity = createSelector(offersByCity, (offers) =>
  offers.map(({ location }, index) => ({
    latitude: location.latitude,
    longitude: location.longitude,
    id: index,
  }))
);

export const cityCenter = createSelector(offersByCity, (offers) => offers[0] && offers[0].city.location);
