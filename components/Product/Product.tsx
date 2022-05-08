import cn from 'classnames';
import css from './Product.module.css';
import ProductProps from './Product.props';
import { Card } from '..';
import { ProductHeader, ProductBody, ProductFooter } from '.';

export const Product = ({ product, className, ...rest }: ProductProps) => {
  return (
    <Card className={cn(className, css['container'])} {...rest}>
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
      <ProductFooter />
    </Card>
  );
};
