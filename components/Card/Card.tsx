import cn from 'classnames';
import css from './Card.module.css';
import CardProps from './Card.props';

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={cn(css.card, className, {})} {...rest}>
      {children}
    </div>
  );
};
