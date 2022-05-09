import cn from 'classnames';
import { HTag, Tag, AdvantageCard, Card, HhData, SortSwitch, Product } from '../../components';
import css from './TopPage.module.css';
import { TopPageProps } from './TopPageProps';
import parseHTML from 'html-react-parser';
import { useReducer } from 'react';
import { SortState } from '../../components/SortSwitch/SortSwitch.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, className }: TopPageProps) => {
  const [{ sort: sortState, products: sortedProducts }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortState.Rating,
  });

  return (
    <div className={cn(css['container'], className)}>
      <div className={css['header']}>
        <HTag tag="h1">{`Курсы ${page.categoryOn}`}</HTag>
        <div className={css['count']}>
          <Tag color="gray">{products.length}</Tag>
        </div>
        <SortSwitch className={css['sort']} state={sortState} setState={(state) => dispatchSort({ type: state })} />
      </div>

      <section className={css['product-block']}>
        {sortedProducts.slice(0, 2).map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </section>

      <section className={css['salary']}>
        <div className={css['salary-title']}>
          <HTag tag="h2">{`Вакансии - ${page.category}`}</HTag>
          <Tag color="red">hh.ru</Tag>
        </div>
        <HhData data={page.hh} />
      </section>

      {page.advantages[0]?.description && (
        <section className={css['advantages']}>
          <HTag tag="h2">Преимущества</HTag>
          <Card className={css['advantages-block']}>
            <ul>
              {page.advantages.map((a) => (
                <AdvantageCard key={a._id} data={a} />
              ))}
            </ul>
          </Card>
        </section>
      )}

      {page.seoText && (
        <div className={css['description']}>
          <HTag tag="h2">Описание</HTag>
          <Card className={css['description-block']}>{parseHTML(page.seoText)}</Card>
        </div>
      )}

      {page.tags.length && (
        <div className={css['skills']}>
          <HTag tag="h2">{page.tagsTitle}</HTag>
          <ul className={css['skills-block']}>
            {page.tags.map((t) => (
              <li key={t}>
                <Tag size="s" color="primary">
                  {t}
                </Tag>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
