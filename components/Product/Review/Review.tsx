import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import css from './Review.module.css';
import ReviewProps from './Review.props';
import UserIcon from './user.svg';
import { Rating, PTag } from '../..';

export const Review = ({ review, className, ...rest }: ReviewProps) => {
  return (
    <div className={cn(className, css['container'])} {...rest}>
      <div className={css['title']}>
        <UserIcon />
        <strong>{review.name}:</strong>
        <span>{review.title}</span>
      </div>
      <div className={css['rating']}>
        <time>{format(new Date(review.createdAt), 'dd MMMM yyyy', { locale: ru })}</time>
        <Rating rating={review.rating}></Rating>
      </div>
      <PTag className={css['description']} size="s">
        {review.description}
      </PTag>
    </div>
  );
};
