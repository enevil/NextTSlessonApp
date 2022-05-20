import cn from 'classnames';
import Link from 'next/link';
import { Card } from '../../components';
import css from './TypePage.module.css';
import { TypePageProps } from './TypePage.porps';
import { firstLevelMenuData } from '../../helpers/menu';

export const TypePage = ({ menu, firstCategory, className }: TypePageProps) => {
  const type = firstLevelMenuData.find((f) => f._id === firstCategory);
  if (!type) {
    return null;
  }
  return (
    <div className={cn(className, css.container)}>
      <h1 className={css.h1}>{type.name}</h1>
      <ul className={css['card-container']}>
        {menu.map((m) => (
          <Card key={m._id.secondCategory} className={css['card']}>
            <li>
              <h2 className={css.h2}>{m._id.secondCategory}</h2>
            </li>
            <ul>
              {m.pages.map((p) => (
                <li key={p._id}>
                  <Link href={`/${type.route}/${p.alias}`}>
                    <a className={css.link}>{p.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </ul>
    </div>
  );
};
