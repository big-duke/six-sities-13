import cn from 'classnames';
import { Link } from 'react-router-dom';
import { City } from '../../const';

type CityListProps = {
  selectedCity: string;
  onCityClick: (value: string) => void;
}

function CityList({ selectedCity, onCityClick }: CityListProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(City).map((city) =>
            (
              <li key={city} className="locations__item">
                <Link onClick={() => onCityClick(city)}
                  className={cn('locations__item-link tabs__item', { 'tabs__item--active': city === selectedCity })}
                  to="/"
                >
                  <span>{city}</span>
                </Link>

              </li>
            )
          )}
        </ul>
      </section>
    </div>

  );
}

export default CityList;
