import dayjs from 'dayjs';
import { Review } from '../../types';
import ReviewRating from './review-rating';

type ReviewItemProps = {
  review: Review;
}
function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { comment, user, rating , date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt={user.name} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <ReviewRating rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
