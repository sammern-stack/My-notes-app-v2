import "./Sidebar.scss";
import { ActiveNoteActions } from "./ActiveNoteActions";
import { NavigationSidebar } from "./NavigationSidebar";

type SidebarProps = { position: "left" } | { position: "right" };

export const Sidebar = (props: SidebarProps) =>
  props.position === "left" ? <NavigationSidebar /> : <ActiveNoteActions />;
