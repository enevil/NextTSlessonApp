import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

export interface TypePageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
}
