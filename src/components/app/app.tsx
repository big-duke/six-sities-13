import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import { FavoritiesPage, LoginPage, MainPage, NotFoundPage, OfferPage } from '../../pages';
import { ProtectedRoute } from '..';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={<ProtectedRoute><FavoritiesPage /></ProtectedRoute>} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;


