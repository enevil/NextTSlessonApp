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
      <div className={css['title-block']}>
        <div className={cn(css['logo'])}>
          <Image src={`https://courses-top.ru${image}`} width="70px" height="70px" />
        </div>
        <div className={cn(css['title'])}>
          <HTag tag="h3">{title}</HTag>
        </div>
        <div className={css['categories']}>
          {categories.map((i) => (
            <Tag key={i} size="s" color="ghost">
              {i}
            </Tag>
          ))}
        </div>
      </div>
      <div className={css['price-block']}>
        <div className={css['price']}>
          <div className={cn(css['text-m'])}>
            <span className={css['current-price']}>{parsePrice(price)}</span>
            <Tag size="s" color="green">{`-${parsePrice(oldPrice - price)}`}</Tag>
          </div>
          <div className={css['text-s']}>цена</div>
        </div>

        <div className={css['credit']}>
          <div className={cn(css['text-m'])}>
            <span className={css['credit-price']}>{parsePrice(credit)}</span>
            <span className={css['month']}>/мес</span>
          </div>
          <div className={css['text-s']}>в кредит</div>
        </div>

        <div className={css['rating']}>
          <Rating rating={initialRating} />
          <div className={css['text-s']}>{`${reviewCount} ${applyDeclension(reviewCount, [
            'отзыв',
            'отзыва',
            'отзывов',
          ])}`}</div>
        </div>
      </div>
    </div>
  );
};
