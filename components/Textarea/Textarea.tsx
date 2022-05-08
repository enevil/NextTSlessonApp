import cn from 'classnames';
import css from './Textarea.module.css';
import TextareaProps from './Textarea.props';

export const Textarea = ({ className, ...rest }: TextareaProps) => {
  return <textarea className={cn(css.textarea, className)} {...rest} />;
};
