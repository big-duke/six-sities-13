import { RatingSettings } from '../../const';

type StarRatingProps = {
  rating: number;
  variant: 'place-rating' | 'offer-rating';
}
function StarRating({ rating , variant}: StarRatingProps): JSX.Element {
  const width = `${Math.round(RatingSettings.scaleMax / RatingSettings.starCount * rating)}%`;

  return (
    variant === 'place-rating' ?
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      :
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>

  );
}


export default StarRating;
