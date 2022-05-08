import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TopPageAdvantage } from '../../interfaces/page.interface';

export default interface AdvantageCard extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  data: TopPageAdvantage;
}
