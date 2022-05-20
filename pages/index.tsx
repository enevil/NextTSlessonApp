import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/MainLayout/MainLayout';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import { API } from '../helpers/api';
import { HomePage } from '../page-componenets';

const Home = () => {
  return <HomePage />;
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
