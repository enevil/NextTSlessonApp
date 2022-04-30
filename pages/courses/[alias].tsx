import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/MainLayout/MainLayout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPage } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { Product } from "../../interfaces/product.interface";

const firstCategory = 0;

const Course = ({ menu, page, products }: CourseProps) => {
	return <div>{page && page.category}</div>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_ENV_DOMAIN + "api/top-page/find", {
		firstCategory,
	});
	return {
		paths: menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)),
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
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_ENV_DOMAIN + "api/top-page/find", {
		firstCategory,
	});
	const { data: page } = await axios.get<TopPage>(
		process.env.NEXT_ENV_DOMAIN + "api/top-page/byAlias/" + params.alias
	);
	const { data: products } = await axios.post<Product[]>(process.env.NEXT_ENV_DOMAIN + "api/product/find", {
		category: page.category,
		limit: 10,
	});
	return {
		props: {
			menu,
			firstCategory,
			page,
			products,
		},
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
	page: TopPage;
	products: Product[];
}
