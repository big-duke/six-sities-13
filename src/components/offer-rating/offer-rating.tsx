import { RatingSettings } from '../../const';

type PlaceRatingProps = {
  rating: number;
}
function OfferRating({ rating }: PlaceRatingProps): JSX.Element {
  const width = Math.round(RatingSettings.scaleMax / RatingSettings.starCount * rating);
  console.log(rating, width);
  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">{rating}</span>
    </div>

  );
}


export default OfferRating;
