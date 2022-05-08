import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface SortSwitchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  state: SortState;
  setState: (state: SortState) => void;
}

export enum SortState {
  Rating,
  Price,
}
