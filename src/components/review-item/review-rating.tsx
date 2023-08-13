import { RatingSettings } from '../../const';

type PlaceRatingProps = {
  rating: number;
}
function ReviewRating({ rating }: PlaceRatingProps): JSX.Element {
  const width = Math.round(RatingSettings.scaleMax / RatingSettings.starCount * rating);
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{width}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>

  );
}


export default ReviewRating;
