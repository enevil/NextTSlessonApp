import cn from 'classnames';
import HeaderProps from './Header.props';
import LogoIcon from '../logo.svg';
import css from './Header.module.css';
import { ButtonIcon } from '../../../components';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

export const Header = ({ className, ...rest }: HeaderProps) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setSidebar(false);
  }, [router]);

  const MotionSidebar = motion(Sidebar);
  return (
    <header className={cn(css.container, className)} {...rest}>
      <LogoIcon />
      <ButtonIcon appearance="white" icon="burger" onClick={() => setSidebar(true)} />
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <MotionSidebar initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className={css.sidebar} />
        )}
      </AnimatePresence>
      {isSidebarOpen && (
        <ButtonIcon className={css.close} appearance="white" icon="close" onClick={() => setSidebar(false)} />
      )}
    </header>
  );
};

export default Header;
