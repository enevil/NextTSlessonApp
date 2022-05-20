import cn from 'classnames';
import css from './ProductFooter.module.css';
import ProductFooterProps from './ProductFooter.props';
import { Button } from '../..';
import { ForwardedRef, forwardRef } from 'react';

export const ProductFooter = forwardRef(
  ({ reviewsIsOpen, setReviewsIsOpen, className, ...rest }: ProductFooterProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cn(className, css['container'])} {...rest}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button
          onClick={() => {
            setReviewsIsOpen(!reviewsIsOpen);
          }}
          appearance="ghost"
          arrow={reviewsIsOpen ? 'down' : 'right'}
          aria-expanded={reviewsIsOpen}
        >
          Читать отзывы
        </Button>
      </div>
    );
  }
);
