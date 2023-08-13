import { useState } from 'react';
import { useAppDispatch, useAppSelector, useToggle } from '../../hooks';
import { SortOption } from '../../const';
import cn from 'classnames';
import { actions, selectors } from '../../store';

function SortOffers(): JSX.Element {
  const [isSortOpen, setSortOpen] = useState(false);
  const selectedSortOption = useAppSelector(selectors.getSortOption);

  const dispatch = useAppDispatch();

  const toggleSortOpen = () => setSortOpen((prev) => !prev);
  const sortOptions = Object.values(SortOption);

  const handleSetSortOption = (option: SortOption) => {
    dispatch(actions.setSortOption(option));
    toggleSortOpen();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        data-testid="selected-option"
        onClick={toggleSortOpen}
      >
        {selectedSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', { 'places__options--opened': isSortOpen })}
        data-testid="sort-options"
      // onClick={handleSortOptionSelect}
      > {sortOptions.map((option) => (
          <li
            key={option}
            className={cn('places__option', { 'places__option--active': option === selectedSortOption })}
            onClick={() => handleSetSortOption(option)}
          >{option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
