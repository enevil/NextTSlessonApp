import Menu from '../Menu/Menu';
import SidebarProps from './Sidebar.props';
import css from './Sidebar.module.css';
import cn from 'classnames';
import LogoIcon from '../logo.svg';
import { Search } from '../../../components';
import { ForwardedRef, forwardRef } from 'react';

const Sidebar = forwardRef(({ className, ...rest }: SidebarProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <aside ref={ref} className={cn(className, css['sidebar__block'])} {...rest}>
      <LogoIcon />
      <Search />
      <Menu />
    </aside>
  );
});

export default Sidebar;
