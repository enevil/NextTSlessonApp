import cn from 'classnames';
import css from './Menu.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { AppContext } from '../../../context/app.context';
import { PageItem } from '../../../interfaces/menu.interface';
import { firstLevelMenuData } from '../../../helpers/helpers';

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const thirdLevelVariants = {
    hidden: { margin: 0 },
    visible: { marginBottom: 20, transition: { staggerChildren: 0.05 } },
  };

  const endLinksVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, marginTop: 10, height: 'auto' },
  };

  const toogleSecondLevelMenuItem = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((slMenuItem) => {
          if (slMenuItem._id.secondCategory === secondCategory) {
            slMenuItem.isOpenned = !slMenuItem.isOpenned;
          }
          return slMenuItem;
        })
      );
  };

  const buildFirstLevelMenu = () => {
    return (
      <ul className={css['first-level-menu']}>
        {firstLevelMenuData.map((flMenuItem) => (
          <li key={flMenuItem.route}>
            <Link href={`/${flMenuItem.route}`}>
              <a
                className={cn(css['first-level-menu__item'], {
                  [css['first-level-menu__item_active']]: flMenuItem._id === firstCategory,
                })}
              >
                {flMenuItem.icon}
                <span>{flMenuItem.name}</span>
              </a>
            </Link>
            {flMenuItem._id === firstCategory && buildSecondLevelMenu(flMenuItem.route)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevelMenu = (route: string) => {
    return (
      <div className={css['second-level-menu']}>
        <ul className={css['second-level-menu__block']}>
          {menu.map((slMenuItem) => (
            <li key={slMenuItem._id.secondCategory} className={css['second-level-menu__item']}>
              <span onClick={() => toogleSecondLevelMenuItem(slMenuItem._id.secondCategory)}>
                {slMenuItem._id.secondCategory}
              </span>
              {buildThirdLevelMenu(slMenuItem.pages, route, slMenuItem.isOpenned || false)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string, isOpenned: boolean) => {
    const alias = router.query.alias;
    if (Array.isArray(alias) || !alias) {
      return;
    }
    const isStartMenu = pages.map((p) => p.alias).includes(alias);
    return (
      <motion.ul
        initial={false}
        animate={isOpenned || isStartMenu ? 'visible' : 'hidden'}
        variants={thirdLevelVariants}
        className={cn(css['third-level-menu'])}
      >
        {pages.map((tlMenuItem) => (
          <motion.li key={tlMenuItem._id} variants={endLinksVariants}>
            <Link href={`/${route}/${tlMenuItem.alias}`}>
              <a
                className={cn(css['third-level-menu__item'], {
                  [css['third-level-menu__item_active']]: tlMenuItem.alias === alias,
                })}
              >
                {tlMenuItem.category}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return <nav>{buildFirstLevelMenu()}</nav>;
};

export default Menu;
