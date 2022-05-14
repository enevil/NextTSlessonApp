import cn from 'classnames';
import ButtonIconProps from './ButtonIcon.props';
import css from './ButtonIcon.module.css';
import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';
import { icons } from './ButtonIcon.props';

export const ButtonIcon = motion(
  forwardRef(({ appearance, icon, onClick, className }: ButtonIconProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const Icon = icons[icon];
    return (
      <button
        ref={ref}
        className={cn(className, css.button, {
          [css.primary]: appearance === 'primary',
          [css.white]: appearance === 'white',
        })}
        onClick={onClick}
      >
        <Icon />
      </button>
    );
  })
);
