import cn from 'classnames';
import css from './SortSwitch.module.css';
import SortSwitchProps, { SortState } from './SortSwitch.props';
import SortIcon from './sort.svg';

export const SortSwitch = ({ className, state = SortState.Rating, setState }: SortSwitchProps) => {
  return (
    <div className={cn(className, css.sort)}>
      <span className={css.title} id="sort">
        Сортировка
      </span>
      <button
        onClick={() => setState(SortState.Rating)}
        className={cn({ [css.active]: state === SortState.Rating })}
        id="sort-rating"
        aria-selected={state === SortState.Rating}
        aria-labelledby="sort sort-rating"
      >
        {state === SortState.Rating && <SortIcon />}
        По рейтингу
      </button>

      <button
        onClick={() => setState(SortState.Price)}
        className={cn({ [css.active]: state === SortState.Price })}
        id="sort-price"
        aria-selected={state === SortState.Price}
        aria-labelledby="sort sort-price"
      >
        {state === SortState.Price && <SortIcon />}
        По цене
      </button>
    </div>
  );
};
