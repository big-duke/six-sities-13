import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefalutMiddleware) =>
    getDefalutMiddleware({ thunk: { extraArgument: api } }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
