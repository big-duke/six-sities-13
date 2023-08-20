import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';


import SubmitButton from './submit-button';
import { useLogin } from './useLogin';

function LoginPage() {
  const {isAuth, isAuthLoading, handleLogin} = useLogin();

  if (isAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities | Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleLogin}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" pattern='(?=.*\d)(?=.*[a-zA-Z]).*'
                  title="Пароль должен состоять минимум из одной буквы и цифры" required
                />
              </div>
              <SubmitButton loading={isAuthLoading} />
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default LoginPage;
