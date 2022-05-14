import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'down' | 'right' | 'none';
}

export default ButtonProps;
