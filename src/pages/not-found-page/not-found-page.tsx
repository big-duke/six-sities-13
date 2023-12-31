import { Link } from 'react-router-dom';
import { CityList, Header } from '../../components';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(){
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities | Page not found</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index page__main--index-empty">

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <h1>Ошибка 404</h1>
                <h2>Запрашиваемый ресурс не найден</h2>
                <h4>
                  <Link to='/'>На главную страницу</Link>
                </h4>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>

  );
}

export default NotFoundPage;
