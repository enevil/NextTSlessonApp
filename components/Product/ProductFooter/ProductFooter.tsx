import cn from 'classnames';
import css from './ProductFooter.module.css';
import ProductFooterProps from './ProductFooter.props';
import { Button } from '../..';

export const ProductFooter = ({ reviewsIsOpen, setReviewsIsOpen, className, ...rest }: ProductFooterProps) => {
  return (
    <div className={cn(className, css['container'])} {...rest}>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button
        onClick={() => {
          setReviewsIsOpen(!reviewsIsOpen);
        }}
        appearance="ghost"
        arrow={reviewsIsOpen ? 'down' : 'right'}
      >
        Читать отызывы
      </Button>
    </div>
  );
};
