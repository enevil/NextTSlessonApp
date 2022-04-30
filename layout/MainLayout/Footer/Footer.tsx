import FooterProps from "./Footer.props";
import css from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...rest }: FooterProps) => {
	return (
		<footer className={cn(css.container, className)} {...rest}>
			<address className={cn(css.cred)}>TopApp © 2020 - 2022 Developed by enevil</address>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};

export default Footer;
