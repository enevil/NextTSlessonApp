import { TopLevelCategory } from './page.interface';

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpenned?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  _id: TopLevelCategory;
}
