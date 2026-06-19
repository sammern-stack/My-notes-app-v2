// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { RenderOptions, TagsList } from "@components/features/Filters";
import { Icon } from "@components/shared";
import "./Sidebar.scss";

export const NavigationSidebar = () => {
  return (
    <div className="sidebar sidebar--left">
      <div className="sidebar__logo-wrapper">
        <a href="http://localhost:5173/">
          <Icon name="logo" />
        </a>
      </div>

      <div className="sidebar__filters">
        <RenderOptions />

        <div className="sidebar__divider"></div>

        <div className="sidebar__tags-header">
          <div className="sidebar__tags-title">Tags</div>
        </div>

        <TagsList />
      </div>
    </div>
  );
};
