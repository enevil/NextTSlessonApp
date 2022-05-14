import cn from 'classnames';
import css from './ProductBody.module.css';
import ProductBodyProps from './ProductBody.props';
import { PTag, Tag } from '../..';

export const ProductBody = ({
  description,
  advantages,
  characteristics,
  tags,
  className,
  ...rest
}: ProductBodyProps) => {
  return (
    <div className={cn(className, css['container'])} {...rest}>
      <div className={css['description']}>
        <PTag>{description}</PTag>
      </div>
      <div className={css['characteristics']}>
        <ul>
          {characteristics.map((i) => (
            <li className={css['characteristics-item']} key={i.name}>
              <strong className={cn(css['characteristic-name'], css['text-m'])}>{i.name}</strong>
              <div className={cn(css['characteristic-value'], css['text-s'])}>{i.value}</div>
            </li>
          ))}
        </ul>
      </div>
      {advantages && (
        <div className={css['advantages']}>
          <div className={css['advantages-block']}>
            <div className={cn(css['advantages-title'], css['text-m'])}>Преимущества</div>
            <PTag>{advantages}</PTag>
          </div>
        </div>
      )}
      <div className={css['tags']}>
        {tags.map((i) => (
          <Tag key={i} size="s" color="ghost">
            {i}
          </Tag>
        ))}
      </div>
    </div>
  );
};
