import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface PTagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: "s" | "m" | "l";
}
