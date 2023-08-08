import { Fragment } from 'react';

const rates = [{ rate: 1, title: 'terribly' }, { rate: 2, title: 'badly' }, { rate: 3, title: 'not bad' }, { rate: 4, title: 'good' }, { rate: 5, title: 'perfect' }];
type StarsRatingProps = {
  setRating: (event: React.MouseEvent<HTMLInputElement>) => void;
}
function StarsRating({ setRating }: StarsRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {rates.map(({ rate, title }) => (
        <Fragment key={rate}>
          <input className="form__rating-input visually-hidden" name="rating" defaultValue={rate} id={`${rate}-stars`} type="radio" onClick={setRating} />
          <label htmlFor={`${rate}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </Fragment>)).reverse()}

    </div>
  );
}

export default StarsRating;
