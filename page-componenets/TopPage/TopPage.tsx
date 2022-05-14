import cn from 'classnames';
import { HTag, Tag, AdvantageCard, Card, HhData, SortSwitch, Product, ButtonIcon } from '../../components';
import css from './TopPage.module.css';
import { TopPageProps } from './TopPageProps';
import parseHTML from 'html-react-parser';
import { useEffect, useReducer } from 'react';
import { SortState } from '../../components/SortSwitch/SortSwitch.props';
import { sortReducer } from './sort.reducer';
import { useScrollY } from '../../hooks/useScrollY';
import { useAnimation } from 'framer-motion';

export const TopPageComponent = ({ page, products, className }: TopPageProps) => {
  // SORT
  const [{ sort: sortState, products: sortedProducts }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortState.Rating,
  });
  useEffect(() => {
    dispatchSort({ type: 'UPDATE', payload: products });
    dispatchSort({ type: sortState });
  }, [products]);

  // SCROLL UP
  const y = useScrollY();
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {sortedProducts.map((p) => (
          <Product key={p._id} product={p} layout />
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

      <ButtonIcon appearance="primary" icon="up" initial={false} animate={controls} onClick={goUp} />
    </div>
  );
};
