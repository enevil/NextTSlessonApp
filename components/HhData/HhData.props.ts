import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { HhData } from '../../interfaces/page.interface';

export default interface HhDataProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: HhData;
}
