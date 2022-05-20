import Menu from '../Menu/Menu';
import SidebarProps from './Sidebar.props';
import css from './Sidebar.module.css';
import cn from 'classnames';
import LogoIcon from '../logo.svg';
import { Search } from '../../../components';
import { ForwardedRef, forwardRef } from 'react';
import Link from 'next/link';

const Sidebar = forwardRef(({ className, ...rest }: SidebarProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <aside ref={ref} className={cn(className, css['sidebar__block'])} {...rest}>
      <Link href={'/'}>
        <div className={css['logo']}>
          <LogoIcon />
        </div>
      </Link>

      <Search />
      <Menu />
    </aside>
  );
});

export default Sidebar;
