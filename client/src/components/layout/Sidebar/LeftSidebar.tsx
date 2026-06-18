import { Icon } from "@components/shared";
import "./Sidebar.scss";

export const LeftSidebar = () => {
  return (
    <div className={`sidebar sidebar--right`}>
      <Icon name="logo" />
      <p>left sidebar</p>
    </div>
  );
};
