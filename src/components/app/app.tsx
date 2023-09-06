import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import { FavoritiesPage, LoginPage, MainPage, NotFoundPage, OfferPage, OutOfServicePage } from '../../pages';
import { HistoryRouter, ProtectedRoute } from '..';
import { HelmetProvider } from 'react-helmet-async';
import { browserHistory } from '../../browser-history';
import { asyncActions, store } from '../../store';

store.dispatch(asyncActions.checkAuth());
store.dispatch(asyncActions.fetchOffers());

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<ProtectedRoute><FavoritiesPage /></ProtectedRoute>} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.HTTP404} element={<NotFoundPage />} />
          <Route path={AppRoute.HTTP500} element={<OutOfServicePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;


