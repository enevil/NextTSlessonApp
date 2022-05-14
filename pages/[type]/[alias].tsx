import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { withLayout } from '../../layout/MainLayout/MainLayout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPage } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { Product } from '../../interfaces/product.interface';
import { firstLevelMenuData } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-componenets';
import { API } from '../../helpers/api';

const Course = ({ page, firstCategory, products }: CourseProps) => {
  return <TopPageComponent firstCategory={firstCategory} products={products} page={page} />;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const menuItem of firstLevelMenuData) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: menuItem._id,
    });
    paths = paths.concat(menu.flatMap((m) => m.pages.map((p) => `/${menuItem.route}/${p.alias}`)));
  }
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
  try {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem._id,
    });
    const { data: page } = await axios.get<TopPage>(API.topPage.byAlias + params.alias);
    const { data: products } = await axios.post<Product[]>(API.product.find, {
      category: page.category,
      limit: 10,
    });
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem._id,
        page,
        products,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPage;
  products: Product[];
}
