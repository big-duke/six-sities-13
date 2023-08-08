import { useState } from 'react';
import { OfferCard } from '..';
import { Offer } from '../../types/types';

type OffersList = {
  offers: Offer[];
}
function OffersList({ offers}: OffersList): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />)}
    </div>);

}

export default OffersList;
