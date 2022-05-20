import cn from 'classnames';
import {
  ForwardedRef,
  forwardRef,
  Fragment,
  KeyboardEvent,
  ReactNode,
  RefCallback,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useErrorMesage } from '../../helpers/helpers';
import css from './Rating.module.css';
import RatingProps from './Rating.props';
import StarIcon from './star.svg';

export const Rating = forwardRef(
  (
    { rating, setRating, isEditable = false, error, className, ...rest }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const errorMesage = useErrorMesage(error?.type);
    const [starsItems, setStarsItems] = useState<ReactNode[]>(new Array(5).fill(<></>));
    const iconsRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const measuredRef = useCallback<RefCallback<HTMLSpanElement>>((node) => {
      if (node) {
        iconsRefs.current.push(node);
      }
    }, []);

    const handleKeyDown = (e: KeyboardEvent, index: number) => {
      if (!setRating) {
        return;
      }

      switch (e.code) {
        case 'Enter':
        case 'Space': {
          e.preventDefault();
          setRating(index + 1);
          break;
        }

        case 'Digit1':
        case 'Digit2':
        case 'Digit3':
        case 'Digit4':
        case 'Digit5': {
          e.preventDefault();
          setRating(+e.key);
          iconsRefs.current[+e.key - 1]?.focus();
          break;
        }

        case 'ArrowLeft':
        case 'ArrowDown': {
          e.preventDefault();
          if (rating > 1) {
            setRating(rating - 1);
            iconsRefs.current[rating - 2]?.focus();
          }
          break;
        }

        case 'ArrowRight':
        case 'ArrowUp': {
          e.preventDefault();
          if (rating < 5) {
            setRating(rating + 1);
            iconsRefs.current[rating]?.focus();
          }
          break;
        }

        default:
          break;
      }
    };

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
            ref={measuredRef}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-label={rating ? `Текущий рейтинг ${rating}` : undefined}
          >
            <StarIcon className={cn(css.star, { [css.filled]: index < currentRating })} />
          </span>
        );
      });

      setStarsItems(updatedStars);
    };

    return (
      <div className={cn(className, css.container)}>
        {isEditable ? (
          <span
            className={'visually-hidden'}
            role={'slider'}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-invalid={!!errorMesage}
          >
            Укажите рейтинг
          </span>
        ) : (
          <span className={'visually-hidden'}>Рейтинг курса - {rating}</span>
        )}
        <div className={cn(css.box, { [css.error]: error })} ref={ref} {...rest}>
          {starsItems.map((star, index) => (
            <Fragment key={index}>{star}</Fragment>
          ))}
        </div>
        {errorMesage && (
          <span className={css.message} role={'alert'}>
            {errorMesage}
          </span>
        )}
      </div>
    );
  }
);
