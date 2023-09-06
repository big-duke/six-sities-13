import { Helmet } from 'react-helmet-async';
import { CityList, CityOffers, Header } from '../../components';

import { useAppSelector } from '../../hooks/redux';
import { selectors } from '../../store';

import cn from 'classnames';


function MainPage(): JSX.Element {

  const { length: offersCount } = useAppSelector(selectors.getOffersByCity);
  const { name } = useAppSelector(selectors.getCity);


  return (
    <div className={cn('page page--gray page--main', offersCount === 0 && 'page__main--index-empty')} >
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
