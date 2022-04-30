import cn from "classnames";
import { Fragment, KeyboardEvent, ReactNode, useEffect, useState } from "react";
import css from "./Rating.module.css";
import RatingProps from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating = ({ rating, setRating, isEditable = false, className, ...rest }: RatingProps) => {
	const [starsItems, setStarsItems] = useState<ReactNode[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedStars = starsItems.map((_, index) => {
			if (!isEditable)
				return (
					<span>
						<StarIcon className={cn(css.star, { [css.filled]: index < currentRating })} />
					</span>
				);
			return (
				<span
					className={css.editable}
					onMouseEnter={() => constructRating(index + 1)}
					onMouseLeave={() => constructRating(rating)}
					onClick={() => {
						if (!setRating) {
							return;
						}
						setRating(index + 1);
					}}
					tabIndex={0}
					onKeyDown={(e: KeyboardEvent) => {
						if (!setRating) {
							return;
						}
						if (e.key === " ") {
							setRating(index + 1);
						}
					}}
				>
					<StarIcon className={cn(css.star, { [css.filled]: index < currentRating })} />
				</span>
			);
		});

		setStarsItems(updatedStars);
	};

	return (
		<div className={cn(css.box, className)} {...rest}>
			{starsItems.map((star, index) => (
				<Fragment key={index}>{star}</Fragment>
			))}
		</div>
	);
};
