import cn from 'classnames';
import css from './Card.module.css';
import CardProps from './Card.props';

export const Card = ({ bg = 'white', children, className, ...rest }: CardProps) => {
  return (
    <div className={cn(css.card, className, { [css['bg-gray']]: bg === 'gray' })} {...rest}>
      {children}
    </div>
  );
};
