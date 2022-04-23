import cn from "classnames";
import css from "./PTag.module.css";
import PTagProps from "./Ptag.props";

export const PTag = ({ size = "m", children, className, ...rest }: PTagProps) => {
	return (
		<p
			className={cn(css.p, className, {
				[css["size-s"]]: size === "s",
				[css["size-m"]]: size === "m",
				[css["size-l"]]: size === "l",
			})}
			{...rest}
		>
			{children}
		</p>
	);
};
