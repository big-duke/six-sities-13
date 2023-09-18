import { Link, generatePath } from 'react-router-dom';
import { Nullable, Offer } from '../../types';
import { AppRoute } from '../../const';
import StarRating from '../star-rating/star-rating';


type OfferCardProps = {
  offer: Offer;
  handlHoverOffer: (offer: Nullable<Offer>) => void;
}
function OfferCard({ offer, handlHoverOffer}: OfferCardProps) {
  const { isPremium, previewImage, title, price, type, id, rating } = offer;
  const offerUrl = generatePath(AppRoute.Offer, { id });
  const selectCard = () => handlHoverOffer(offer);
  const deselectCard = () => handlHoverOffer(null);

  return (
    <article className="cities__card place-card"
      onMouseEnter={selectCard}
      onMouseLeave={deselectCard}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <StarRating rating={rating} variant='place-rating' />
        <h2 className="place-card__name">
          <Link to={offerUrl}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default OfferCard;
