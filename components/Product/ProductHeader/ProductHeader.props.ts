import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ProductHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string;
  title: string;
  categories: string[];
  price: number;
  oldPrice: number;
  credit: number;
  initialRating: number;
  reviewCount: number;
}
