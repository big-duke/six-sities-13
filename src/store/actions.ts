import { createAction } from '@reduxjs/toolkit';
import { City, Nullable, Offer } from '../types';
import { SortOption } from '../const';

export const fetchOffers = createAction('app/fetchOffers');
export const setCity = createAction<City>('app/setCity');
export const setSortOption = createAction<SortOption>('app/setSortOption');
export const setHoverOffer = createAction<Nullable<Offer>>('app/setHoverOffer');
