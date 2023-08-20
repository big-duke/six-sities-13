import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '..';
import { useAuth } from '../../hooks/auth';
import { AppRoute } from '../../const';
import { useSelector } from 'react-redux';
import { actions, selectors } from '../../store';
import { deleteToken } from '../../services/token';
import { useAppDispatch } from '../../hooks';
import { MagnifyingGlass } from 'react-loader-spinner';

function Header() {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const user = useSelector(selectors.getUser);
  const isAuthLoading = useSelector(selectors.getAuthLoading);
  const handleLogout = () => {
    dispatch(actions.logout());
    deleteToken();
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo active />
          </div>
          <nav className="header__nav">
            {isAuth && user ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href={`mailto:${user.email}`}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{ backgroundImage: `url(${user.avatarUrl})`, borderRadius: '50%' }}></div>
                    <span className="header__user-name user__name">
                      {user.email}
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>

                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" onClick={handleLogout}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>


              </ul> :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    {
                      isAuthLoading ?
                        <MagnifyingGlass
                          visible
                          height="50"
                          width="50"
                          ariaLabel="MagnifyingGlass-loading"
                          wrapperStyle={{}}
                          wrapperClass="MagnifyingGlass-wrapper"
                          glassColor='#c0efff'
                          color='#4481C3'
                        />
                        :
                        <>
                          <div className="header__avatar-wrapper user__avatar-wrapper" />
                          <span className="header__login">Sign in</span>
                        </>
                    }


                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
