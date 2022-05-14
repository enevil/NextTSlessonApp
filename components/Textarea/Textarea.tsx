import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { useErrorMesage } from '../../helpers/helpers';
import css from './Textarea.module.css';
import TextareaProps from './Textarea.props';

export const Textarea = forwardRef(
  ({ error, className, ...rest }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const errorMesage = useErrorMesage(error?.type);
    return (
      <div className={cn(className, css.container)}>
        <textarea className={cn(css.textarea, { [css.error]: error })} ref={ref} {...rest} />
        {errorMesage && <span className={css.message}>{errorMesage}</span>}
      </div>
    );
  }
);
