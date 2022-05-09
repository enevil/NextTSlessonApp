import cn from 'classnames';
import css from './Product.module.css';
import ProductProps from './Product.props';
import { Card } from '..';
import { ProductHeader, ProductBody, ProductFooter, Review, ReviewForm } from '.';
import { useState } from 'react';

export const Product = ({ product, className, ...rest }: ProductProps) => {
  const [reviewsIsOpen, setReviewIsOpen] = useState(false);

  return (
    <div className={cn(className, css['container'])}>
      <Card className={css['product']} {...rest}>
        <ProductHeader
          categories={product.categories}
          credit={product.credit}
          image={product.image}
          initialRating={product.initialRating}
          oldPrice={product.oldPrice}
          price={product.price}
          reviewCount={product.reviewCount}
          title={product.title}
        />
        <div className={css['hr']} />
        <ProductBody
          advantages={product.advantages}
          characteristics={product.characteristics}
          description={product.description}
          tags={product.tags}
        />
        <div className={css['hr']} />
        <ProductFooter reviewsIsOpen={reviewsIsOpen} setReviewsIsOpen={setReviewIsOpen} />
      </Card>

      <Card bg="gray" className={cn(css['reviews'], { [css['reviews-active']]: reviewsIsOpen })}>
        {product.reviews.length && product.reviews.map((i) => <Review key={i._id} review={i} />)}
        <ReviewForm />
      </Card>
    </div>
  );
};
