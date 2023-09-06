import { Header } from '../../components';
import { Helmet } from 'react-helmet-async';

function OutOfService(){
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities | Server error</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index page__main--index-empty">

        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <h1>HTTP 500</h1>
                <h2>Ошибка сервера</h2>
                <p className="cities__status-description">Что-то пошло не так. Мы уже разбираемся что случилось.</p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>

  );
}

export default OutOfService;
