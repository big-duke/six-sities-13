import { createAction } from '@reduxjs/toolkit';
import { City } from '../types';

export const fetchOffers = createAction('app/fetchOffers');
export const setCity = createAction<City>('app/setCity');
