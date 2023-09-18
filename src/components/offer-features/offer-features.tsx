import { OfferDetail } from '../../types/offer';

type OfferFeaturesProps = {
  offerDetail: OfferDetail;
}
function OfferFeatures({ offerDetail }: OfferFeaturesProps) {
  const { type, bedrooms, maxAdults } = offerDetail;
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}
export default OfferFeatures;
