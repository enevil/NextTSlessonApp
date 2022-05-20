import Image from 'next/image';
import { PTag } from '../../components';
import { DOMAIN } from '../../helpers/api';
import css from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>Лучшие подборки курсов</h1>
      <figure className={css.promo}>
        <Image src={`${DOMAIN}/promo.png`} width={500} height={400} alt="Промо" />
      </figure>

      <PTag className={css.description} size="l">
        Курсы, обучающие материалы и многое другое, основанные на отзывах, реальных людей.
      </PTag>
    </div>
  );
};
