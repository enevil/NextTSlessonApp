import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ProductFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsIsOpen: boolean;
  setReviewsIsOpen: (state: boolean) => void;
}
