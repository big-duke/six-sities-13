import { createAction } from '@reduxjs/toolkit';

export const fetchOffers = createAction('app/fetchOffers');
export const setCityName = createAction<string>('app/setCityName');
