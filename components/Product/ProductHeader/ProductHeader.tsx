import cn from 'classnames';
import css from './ProductHeader.module.css';
import Image from 'next/image';
import ProductHeaderProps from './ProductHeader.props';
import { Rating, Tag, HTag } from '../..';
import { applyDeclension, parsePrice } from '../../../helpers/helpers';

export const ProductHeader = ({
  title,
  price,
  oldPrice,
  credit,
  initialRating,
  image,
  categories,
  reviewCount,
  className,
  ...rest
}: ProductHeaderProps) => {
  return (
    <div className={cn(className, css['container'])} {...rest}>
      <div className={cn(css['logo'], css['press-down'])}>
        <Image src={`https://courses-top.ru${image}`} width={70} height={70} />
      </div>
      <div className={cn(css['title'], css['press-down'])}>
        <HTag tag="h3">{title}</HTag>
      </div>
      <div className={cn(css['price'], css['press-down'], css['text-m'])}>
        <span className={css['current-price']}>{parsePrice(price)}</span>
        <Tag size="s" color="green">{`-${parsePrice(oldPrice - price)}`}</Tag>
      </div>
      <div className={cn(css['credit'], css['press-down'], css['text-m'])}>
        <span className={css['credit-price']}>{parsePrice(credit)}</span>
        <span className={css['month']}>/мес</span>
      </div>
      <Rating className={cn(css['rating'], css['press-down'])} rating={initialRating} />
      <div className={css['categories']}>
        {categories.map((i) => (
          <Tag key={i} size="s" color="ghost">
            {i}
          </Tag>
        ))}
      </div>
      <div className={cn(css['price-title'], css['text-s'])}>цена</div>
      <div className={cn(css['credit-title'], css['text-s'])}>в кредит</div>
      <div className={cn(css['rating-title'], css['text-s'])}>{`${reviewCount} ${applyDeclension(reviewCount, [
        'отзыв',
        'отзыва',
        'отзывов',
      ])}`}</div>
    </div>
  );
};
