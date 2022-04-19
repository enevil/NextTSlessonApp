import cn from "classnames";
import css from "./Button.module.css";
import ButtonProps from "./Button.props";
import ArrowIcon from "./arrow.svg";

export const Button = ({ appearance, arrow = "none", children, className, ...rest }: ButtonProps) => {
	return (
		<button
			className={cn(css.button, className, {
				[css.primary]: appearance === "primary",
				[css.ghost]: appearance === "ghost",
			})}
			{...rest}
		>
			{children}
			{arrow !== "none" && (
				<span className={cn(css.arrow, { [css.down]: arrow === "down" })}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
