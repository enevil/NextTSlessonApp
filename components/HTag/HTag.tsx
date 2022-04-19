import HTagProps from "./HTag.props";
import css from "./HTag.module.css";
import cn from "classnames";

export const HTag = ({ children, tag, className, ...rest }: HTagProps) => {
	switch (tag) {
		case "h1":
			return (
				<h1 {...rest} className={cn(css.h1, className)}>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2 {...rest} className={cn(css.h2, className)}>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 {...rest} className={cn(css.h3, className)}>
					{children}
				</h3>
			);
		default:
			return <>{children}</>;
	}
};
