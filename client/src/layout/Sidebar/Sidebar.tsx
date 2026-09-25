// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { ActiveNoteActions } from "./ActiveNoteActions";
import { NavigationSidebar } from "./NavigationSidebar";
// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type SidebarProps = { position: "left" } | { position: "right" };

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Sidebar = (props: SidebarProps) =>
  props.position === "left" ? <NavigationSidebar /> : <ActiveNoteActions />;
