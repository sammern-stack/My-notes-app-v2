import "./Sidebar.scss";
import { RightSidebar } from "./RightSidebar";
import { LeftSidebar } from "./LeftSidebar";

type SidebarProps = { position: "left" } | { position: "right" };

export const Sidebar = (props: SidebarProps) => (
  <div className={`sidebar sidebar--${props.position}`}>
    {props.position === "left" ? <LeftSidebar /> : <RightSidebar />}
  </div>
);
