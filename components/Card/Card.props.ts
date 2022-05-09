import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bg?: 'white' | 'gray';
}
