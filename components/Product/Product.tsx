import cn from 'classnames';
import css from './Product.module.css';
import { ForwardedRef, forwardRef, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductProps from './Product.props';
import { Card } from '..';
import { ProductHeader, ProductBody, ProductFooter, Review, ReviewForm } from '.';

export const Product = motion(
  forwardRef(({ product, className, ...rest }: ProductProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [reviewsIsOpen, setReviewIsOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const scrollToReview = useCallback(() => {
      setReviewIsOpen(true);
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
      <div className={cn(className, css['container'])} {...rest} ref={ref}>
        <Card className={css['product']}>
          <ProductHeader
            categories={product.categories}
            credit={product.credit}
            image={product.image}
            initialRating={product.initialRating}
            oldPrice={product.oldPrice}
            price={product.price}
            reviewCount={product.reviewCount}
            title={product.title}
            openReview={scrollToReview}
          />
          <div className={css['hr']} />
          <ProductBody
            advantages={product.advantages}
            characteristics={product.characteristics}
            description={product.description}
            tags={product.tags}
          />
          <div className={css['hr']} />
          <ProductFooter ref={panelRef} reviewsIsOpen={reviewsIsOpen} setReviewsIsOpen={setReviewIsOpen} />
        </Card>
        <AnimatePresence>
          {reviewsIsOpen && (
            <Card
              initial={{ height: 0, marginTop: 0, overflow: 'hidden' }}
              animate={{ height: 'auto', marginTop: -20, transition: { duration: 1 } }}
              exit={{ height: 0, marginTop: 0 }}
              bg="gray"
            >
              <div className={css['reviews']}>
                {!!product.reviews.length && product.reviews.map((i) => <Review key={i._id} review={i} />)}
                <ReviewForm productId={product._id} />
              </div>
            </Card>
          )}
        </AnimatePresence>
      </div>
    );
  })
);
