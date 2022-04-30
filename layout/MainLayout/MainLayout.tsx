import { HTMLAttributes, FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import css from "./MainLayout.module.css";
import { AppContextProvider, IAppContext } from "../../context/app.context";

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={css.container}>
			<Header className={css.header} />
			<Sidebar className={css.sidebar} />
			<main className={css.main}>{children}</main>
			<Footer className={css.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
	return (props: T) => {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
