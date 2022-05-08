import cn from 'classnames';
import css from './Input.module.css';
import InputProps from './Input.props';

export const Input = ({ className, ...rest }: InputProps) => {
  return <input className={cn(css.input, className)} {...rest} />;
};
