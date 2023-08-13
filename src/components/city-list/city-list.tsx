import cn from 'classnames';
import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { actions, selectors } from '../../store';
import { useSelector } from 'react-redux';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { name: currentCity } = useSelector(selectors.getCity);
  return (

    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        (
          <li key={city.name} className="locations__item">
            <Link onClick={() => dispatch(actions.setCity(city))}
              className={cn('locations__item-link tabs__item', { 'tabs__item--active': city.name === currentCity })}
              to="/"
            >
              <span>{city.name}</span>
            </Link>

          </li>
        )
      )}
    </ul>


  );
}

export default CityList;
