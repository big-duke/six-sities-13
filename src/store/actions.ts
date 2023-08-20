import { createAction } from '@reduxjs/toolkit';
import { City, Nullable, Offer } from '../types';
import { AuthStatus, SortOption } from '../const';


export const setCity = createAction<City>('app/setCity');
export const setSortOption = createAction<SortOption>('app/setSortOption');
export const setHoverOffer = createAction<Nullable<Offer>>('app/setHoverOffer');
export const setAuthStatus = createAction<AuthStatus>('app/setAuthStatus');
export const logout = createAction('app/logout');
