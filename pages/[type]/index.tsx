import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenuData } from '../../helpers/helpers';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { withLayout } from '../../layout/MainLayout/MainLayout';

const Type = ({ firstCategory }: TypeProps) => {
  return <>{firstCategory}</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenuData.map((m) => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenuData.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  console.log('xxx', firstCategoryItem._id);
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_ENV_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem._id,
  });
  console.log(menu[0]._id.secondCategory);
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem._id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
