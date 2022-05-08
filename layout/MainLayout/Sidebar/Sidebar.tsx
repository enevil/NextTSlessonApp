import Menu from '../Menu/Menu';
import SidebarProps from './Sidebar.props';
import css from './Sidebar.module.css';
import cn from 'classnames';
import LogoIcon from './logo.svg';
import { Search } from '../../../components';

const Sidebar = ({ className, ...rest }: SidebarProps) => {
  return (
    <aside className={cn(className, css['sidebar__block'])} {...rest}>
      <LogoIcon />
      <Search />
      <Menu />
    </aside>
  );
};

export default Sidebar;
