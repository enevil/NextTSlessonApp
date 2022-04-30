import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	rating: number;
	setRating?: (rating: number) => void;
	isEditable?: boolean;
}
