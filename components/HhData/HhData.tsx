import cn from 'classnames';
import css from './HhData.module.css';
import HhDataProps from './HhData.props';
import { Card } from '../Card/Card';
import StarIcon from './star.svg';

export const HhData = ({ data, className, ...rest }: HhDataProps) => {
  return (
    <div className={cn(css.hh, className, {})} {...rest}>
      <Card>
        <div className={css['hh__vacancy']}>
          <div className={css['hh__title']}>Всего вакансий</div>
          <span className={css['hh__vacancy-amount']}>{data.count}</span>
        </div>
      </Card>
      <Card className={css['hh__salary-ladder']}>
        <div className={css['hh__salary-step']}>
          <div className={css['hh__title']}>Начальный</div>
          <div className={css['hh__salary-amount']}>{data.juniorSalary}</div>
          <div className={css['hh__stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div className={css['hh__salary-step']}>
          <div className={css['hh__title']}>Средний</div>
          <div className={css['hh__salary-amount']}>{data.middleSalary}</div>
          <div className={css['hh__stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
            <StarIcon />
          </div>
        </div>
        <div className={css['hh__salary-step']}>
          <div className={css['hh__title']}>Профессионал</div>
          <div className={css['hh__salary-amount']}>{data.seniorSalary}</div>
          <div className={css['hh__stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
          </div>
        </div>
      </Card>
    </div>
  );
};
