import cn from 'classnames';
import { PTag } from '../PTag/Ptag';
import css from './AdvantageCard.module.css';
import AdvantageCardProps from './AdvantageCard.props';
import CheckMarkIcon from './check_mark.svg';

export const AdvantageCard = ({ data, className, ...rest }: AdvantageCardProps) => {
  return (
    <li className={cn(css.advantage, className)} {...rest}>
      <div className={css.checkmark}>
        <CheckMarkIcon />
      </div>
      <div className={css.title}>
        <strong>{data.title}</strong>
      </div>
      <div className={css.line}></div>
      <div className={css.description}>
        <PTag size="l">{data.description}</PTag>
      </div>
    </li>
  );
};
