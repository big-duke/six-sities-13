import { Offer } from '../../types';
import FavoritesCity from './favorites-city';
import FavoritesOffer from './favorites-offer';

type FavoritesList = {
  offers: Offer[];
}
function FavoritesList({ offers }: FavoritesList) {
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>{<FavoritesCity name={city} />}
          <div className="favorites__places">

            {offers.filter((offer) => offer.city.name === city).map((offer) => <FavoritesOffer offer={offer} key={offer.id}/>)}


          </div>
        </li>
      ))}
    </ul>
  );


}

export default FavoritesList;
