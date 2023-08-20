import { Helmet } from 'react-helmet-async';
import { CityList, CityOffers, Header } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { asyncActions, selectors } from '../../store';

import React from 'react';
import cn from 'classnames';


function MainPage(): JSX.Element {

  const { length: offersCount } = useAppSelector(selectors.getOffersByCity);
  const { name } = useAppSelector(selectors.getCity);

  const dispatch = useAppDispatch();


  React.useEffect(() => {
    dispatch(asyncActions.fetchOffers());
    dispatch(asyncActions.checkAuth());
  }, [dispatch]);
  return (
    <div className={cn('page page--gray page--main', { 'page__main--index-empty': offersCount === 0 })} >
      <Helmet>
        <title>6 cities | {name}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>

        <CityOffers />
      </main>
    </div>

  );
}

export default MainPage;
