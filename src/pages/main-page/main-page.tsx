import { Helmet } from 'react-helmet-async';
import { CityList, Logo, Map, OffersList } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { actions, selectors } from '../../store';

import React from 'react';


function MainPage(): JSX.Element {
  const selectedCity = useAppSelector(selectors.cityName);
  const cityCenter = useAppSelector(selectors.cityCenter);
  const offers = useAppSelector(selectors.offersByCity);
  const points = useAppSelector(selectors.pointsByCity);

  const dispatch = useAppDispatch();
  const handleSetCity = (value: string) => dispatch(actions.setCityName(value));


  const placeFound = `${offers.length} places to stay in ${selectedCity}`;

  React.useEffect(() => {
    dispatch(actions.fetchOffers());
  }, [dispatch]);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities | Main page</title>
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
        <CityList selectedCity={selectedCity} onCityClick={handleSetCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeFound}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>

              <OffersList offers={offers} />

            </section>
            <div className="cities__right-section">
              {cityCenter && <Map center={cityCenter} points={points} />}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
