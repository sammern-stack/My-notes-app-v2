import { Icon } from "@components/shared";
import "./Sidebar.scss";

export const NavigationSidebar = () => {
  return (
    <div className="sidebar sidebar--left sidebar__navigationSidebar">
      <Icon name="logo" />
      <p>left sidebar</p>
    </div>
  );
};
