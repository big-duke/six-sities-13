import { useState } from 'react';
import { OfferCard } from '..';
import { Nullable, Offer } from '../../types';
import { SortOption } from '../../const';
import { actions, selectors } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

type OffersList = {
  offers: Offer[];
}

const compareFn: Record<SortOption, (a: Offer, b: Offer) => number> = {
  [SortOption.Rating]: (a, b) => b.rating - a.rating,
  [SortOption.PriceFromHighLow]: (a, b) => b.price - a.price,
  [SortOption.PriceFromLowToHigh]: (a, b) => a.price - b.price,
  [SortOption.Popular]: () => 0,
};

const getSortedOffers = (sort: SortOption, offers: Offer[]) => {
  switch (sort) {
    case SortOption.Rating:
    case SortOption.PriceFromLowToHigh:
    case SortOption.PriceFromHighLow:
      return [...offers].sort(compareFn[sort]);
    case SortOption.Popular:
      return offers;
  }
};

function OffersList({ offers}: OffersList): JSX.Element {
  const currentSortOption = useAppSelector(selectors.getSortOption);
  const dispatch = useAppDispatch();
  const sortedOffers = getSortedOffers(currentSortOption, offers);

  const handleSetHoverOffer = (offer:Nullable<Offer>) => dispatch(actions.setHoverOffer(offer));
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer) => <OfferCard key={offer.id} offer={offer} handlHoverOffer={handleSetHoverOffer} />)}
    </div>);

}

export default OffersList;
