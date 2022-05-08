import cn from 'classnames';
import css from './SortSwitch.module.css';
import SortSwitchProps, { SortState } from './SortSwitch.props';
import SortIcon from './sort.svg';

export const SortSwitch = ({ state = SortState.Rating, setState }: SortSwitchProps) => {
  return (
    <div className={css.sort}>
      <span onClick={() => setState(SortState.Rating)} className={cn({ [css.active]: state === SortState.Rating })}>
        <SortIcon />
        По рейтингу
      </span>
      <span onClick={() => setState(SortState.Price)} className={cn({ [css.active]: state === SortState.Price })}>
        <SortIcon />
        По цене
      </span>
    </div>
  );
};
