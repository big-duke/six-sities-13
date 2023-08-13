import { RatingSettings } from '../../const';

type PlaceRatingProps = {
  rating: number;
}
function PlaceRating({ rating }: PlaceRatingProps): JSX.Element {
  const width = Math.round(RatingSettings.scaleMax / RatingSettings.starCount * rating);

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
