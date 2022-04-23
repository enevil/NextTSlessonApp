import cn from "classnames";
import css from "./Tag.module.css";
import TagProps from "./Tag.props";

export const Tag = ({ size = "m", color = "ghost", href, children, className, ...rest }: TagProps) => {
	return (
		<div
			className={cn(css.tag, className, {
				[css["size-s"]]: size === "s",
				[css["size-m"]]: size === "m",
				[css["ghost"]]: color === "ghost",
				[css["green"]]: color === "green",
				[css["red"]]: color === "red",
				[css["gray"]]: color === "gray",
				[css["primary"]]: color === "primary",
			})}
			{...rest}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
