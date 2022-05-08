import cn from 'classnames';
import css from './HhData.module.css';
import HhDataProps from './HhData.props';
import { Card } from '../Card/Card';
import StarIcon from './star.svg';
import { parsePrice } from '../../helpers/helpers';

export const HhData = ({ data, className, ...rest }: HhDataProps) => {
  return (
    <div className={cn(css.container, className, {})} {...rest}>
      <Card>
        <div className={css['vacancy']}>
          <div className={css['title']}>Всего вакансий</div>
          <span className={css['vacancy-amount']}>{data.count}</span>
        </div>
      </Card>
      <Card className={css['salary-ladder']}>
        <div className={css['salary-step']}>
          <div className={css['title']}>Начальный</div>
          <div className={css['salary-amount']}>{parsePrice(data.juniorSalary)}</div>
          <div className={css['stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
        <div className={css['salary-step']}>
          <div className={css['title']}>Средний</div>
          <div className={css['salary-amount']}>{parsePrice(data.middleSalary)}</div>
          <div className={css['stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
            <StarIcon />
          </div>
        </div>
        <div className={css['salary-step']}>
          <div className={css['title']}>Профессионал</div>
          <div className={css['salary-amount']}>{parsePrice(data.seniorSalary)}</div>
          <div className={css['stars-bar']}>
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
            <StarIcon className={css['star_filled']} />
          </div>
        </div>
      </Card>
    </div>
  );
};
