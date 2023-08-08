import { usePlaceRating } from './useOfferRating';

type PlaceRatingProps = {
  rating: number;
}
function PlaceRating({ rating }: PlaceRatingProps): JSX.Element {
  const { width } = usePlaceRating(rating);
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>

  );
}


export default PlaceRating;
