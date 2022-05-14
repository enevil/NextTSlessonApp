import cn from 'classnames';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import css from './Card.module.css';
import CardProps from './Card.props';

export const Card = motion(
  forwardRef(({ bg = 'white', children, className, ...rest }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cn(css.card, className, { [css['bg-gray']]: bg === 'gray' })} {...rest}>
        {children}
      </div>
    );
  })
);
