import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
type LogoProps = {
  active?: boolean;
}
function Logo({ active }: LogoProps) {
  return (

    <Link to={AppRoute.Main} className={cn('header__logo-link', { 'header__logo-link--active': active })} >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </Link>

  );
}
export default Logo;
