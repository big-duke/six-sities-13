import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import { FavoritiesPage, LoginPage, MainPage, NotFoundPage, OfferPage } from '../../pages';
import { ProtectedRoute } from '..';
import { HelmetProvider } from 'react-helmet-async';


type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage offersCount={3} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<ProtectedRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritiesPage /></ProtectedRoute>} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <MainPage offersCount={offersCount} />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;


