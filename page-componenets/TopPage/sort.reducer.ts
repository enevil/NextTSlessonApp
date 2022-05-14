import { SortState } from '../../components/SortSwitch/SortSwitch.props';
import { Product } from '../../interfaces/product.interface';

export type SortActions =
  | { type: SortState.Rating }
  | { type: SortState.Price }
  | { type: 'UPDATE'; payload: Product[] };

export interface SortReducerState {
  sort: SortState;
  products: Product[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch (action.type) {
    case SortState.Rating:
      return { sort: SortState.Rating, products: state.products.sort((a, b) => b.initialRating - a.initialRating) };
    case SortState.Price:
      return { sort: SortState.Price, products: state.products.sort((a, b) => a.price - b.price) };
    case 'UPDATE':
      return { sort: state.sort, products: action.payload };
    default:
      throw new Error('Несуществующий тип сортировки');
  }
};
