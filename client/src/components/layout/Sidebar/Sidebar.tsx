// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { ActiveNoteActions } from "./ActiveNoteActions";
import { NavigationSidebar } from "./NavigationSidebar";
import "./Sidebar.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type SidebarProps = { position: "left" } | { position: "right" };

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Sidebar = (props: SidebarProps) =>
  props.position === "left" ? <NavigationSidebar /> : <ActiveNoteActions />;
