import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductCharacteristic } from '../../../interfaces/product.interface';

export default interface ProductBodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: string;
  characteristics: ProductCharacteristic[];
  advantages: string;
  tags: string[];
}
