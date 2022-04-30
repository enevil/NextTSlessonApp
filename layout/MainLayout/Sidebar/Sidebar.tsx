import Menu from "../Menu/Menu";
import SidebarProps from "./Sidebar.props";

const Sidebar = ({ ...rest }: SidebarProps) => {
	return (
		<aside {...rest}>
			<Menu></Menu>
		</aside>
	);
};

export default Sidebar;
