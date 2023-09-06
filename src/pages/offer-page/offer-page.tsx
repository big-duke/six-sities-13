import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CommentForm, Header, Map, OfferImageList, OfferRating, OffersList } from '../../components';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { reviews } from '../../mocks/reviews';
import { offers } from '../../mocks/offers';
import './style.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { asyncActions, selectors } from '../../store';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/auth';

type ApiError = {
  code: string;
  response: {
    status: number;
    data?: { message: string };
  };
}

function OfferPage() {
  const { id } = useParams<{ id?: string }>();
  const offerDetail = useAppSelector(selectors.getOfferDetail);
  const loading = useAppSelector(selectors.getLoadingStatus);
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(asyncActions.fetchOffer({ id }));
    }
  }, [dispatch, id]);

  if (loading === 'loading') {
    return (<div>...loading</div>);
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities | Offer details</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        {offerDetail && loading === 'succeeded' &&
          <section className="offer">
            <OfferImageList images={offerDetail.images} />
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offerDetail.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offerDetail.title}
                  </h1>
                  {isAuth &&
                    <button className="offer__bookmark-button button" type="button">
                      <svg className="offer__bookmark-icon" width={31} height={33}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>}
                </div>
                <OfferRating rating={offerDetail.rating} />
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    Apartment
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€120</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos; inside</h2>
                  <ul className="offer__inside-list">
                    <li className="offer__inside-item">
                      Wi-Fi
                    </li>
                    <li className="offer__inside-item">
                      Washing machine
                    </li>
                    <li className="offer__inside-item">
                      Towels
                    </li>
                    <li className="offer__inside-item">
                      Heating
                    </li>
                    <li className="offer__inside-item">
                      Coffee machine
                    </li>
                    <li className="offer__inside-item">
                      Baby seat
                    </li>
                    <li className="offer__inside-item">
                      Kitchen
                    </li>
                    <li className="offer__inside-item">
                      Dishwasher
                    </li>
                    <li className="offer__inside-item">
                      Cabel TV
                    </li>
                    <li className="offer__inside-item">
                      Fridge
                    </li>
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="offer__user-name">
                      Angelina
                    </span>
                    <span className="offer__user-status">
                      Pro
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="offer__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewsList reviews={reviews.slice(0, 5)} />
                  <CommentForm />
                </section>
              </div>
            </div>
            <section className="offer__map map">
              {/* <Map center={offers[0].city.location} points={offers.map(({ location }, index) => ({ latitude: location.latitude, longitude: location.longitude, id: index }))} /> */}
            </section>
          </section>}
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={offers} />

          </section>
        </div>
      </main>
    </div>
  );
}


export default OfferPage;
