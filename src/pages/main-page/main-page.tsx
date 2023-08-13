import { Helmet } from 'react-helmet-async';
import { CityList, CityOffers, Logo } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';

import React from 'react';
import cn from 'classnames';


function MainPage(): JSX.Element {

  const { length: offersCount } = useAppSelector(selectors.getOffersByCity);
  const { name } = useAppSelector(selectors.getCity);

  const dispatch = useAppDispatch();


  React.useEffect(() => {
    dispatch(actions.fetchOffers());
  }, [dispatch]);
  return (
    <div className={cn('page page--gray page--main', { 'page__main--index-empty': offersCount === 0 })} >
      <Helmet>
        <title>6 cities | {name}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo active />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
