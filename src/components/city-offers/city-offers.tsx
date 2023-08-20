import { Map, OffersList } from '..';
import { useAppSelector } from '../../hooks';
import { selectors } from '../../store';
import OffersEmpty from '../offers-empty/offers-empty';
import SortOffers from '../sort-offers/sort-offers';
import {Grid} from 'react-loader-spinner';
const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const CityOffers = () => {
  const city = useAppSelector(selectors.getCity);
  const offers = useAppSelector(selectors.getOffersByCity);
  const points = useAppSelector(selectors.getPointsByCity);
  const loading = useAppSelector(selectors.getLoadingStatus);

  const offersCount = offers.length;

  const cityTitle = `${offersCount} places to stay in ${city.name}`;

  if (loading) {
    return (
      <Grid
        height="80"
        width="80"
        color="#4481C3"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={override}
        visible
      />);
  }

  if (!offersCount) {
    return (
      <OffersEmpty/>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cityTitle}</b>
          <SortOffers />
          <OffersList
            offers={offers}
          />
        </section>
        <div className="cities__right-section">
          <Map
            center={city.location}
            points={points}
          />
        </div>
      </div>


    </div>
  );
};

export default CityOffers;
