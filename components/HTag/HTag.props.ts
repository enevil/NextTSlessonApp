import { HTMLAttributes, ReactNode } from 'react';

interface HTagProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}

export default HTagProps;
