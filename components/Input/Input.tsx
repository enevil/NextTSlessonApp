import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { useErrorMesage } from '../../helpers/helpers';
import css from './Input.module.css';
import InputProps from './Input.props';

export const Input = forwardRef(({ error, className, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const errorMesage = useErrorMesage(error?.type);

  return (
    <div className={cn(className)}>
      <input className={cn(css.input, { [css.error]: error })} ref={ref} {...rest} />
      {errorMesage && <span className={css.message}>{errorMesage}</span>}
    </div>
  );
});
