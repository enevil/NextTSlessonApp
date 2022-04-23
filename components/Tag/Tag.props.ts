import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	href?: string;
	size?: "s" | "m";
	color?: "ghost" | "red" | "gray" | "green" | "primary";
}
