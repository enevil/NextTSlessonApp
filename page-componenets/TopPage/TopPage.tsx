import cn from 'classnames';
import { HTag, Tag } from '../../components';
import { HhData } from '../../components/HhData/HhData';
import css from './TopPage.module.css';
import { TopPageProps } from './TopPageProps';

export const TopPageComponent = ({ firstCategory, page, products, className, ...rest }: TopPageProps) => {
  return (
    <div className={cn(css['top-page'], css['top-page__container'])}>
      <div className={css['top-page__header']}>
        <HTag tag="h1">{`Курсы ${page.categoryOn}`}</HTag>
        <div className={css['top-page__count']}>
          <Tag color="gray">{products.length}</Tag>
        </div>
        <div className={css['top-page__sort']}>
          <span>По рейтингу</span>
          <span>По цене</span>
        </div>
      </div>
      <section className={css['top-page__product-card']}> </section>

      <section className={css['top-page__salary']}>
        <div className={css['top-page__salary-title']}>
          <HTag tag="h2">{`Вакансии - ${page.category}`}</HTag>
          <Tag color="red">hh.ru</Tag>
        </div>
        <HhData data={page.hh} />
      </section>

      <section className={css['top-page__advantages']}></section>
      <div className={css['top-page__skills']}></div>
    </div>
  );
};
