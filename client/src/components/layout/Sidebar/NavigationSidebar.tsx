// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { RenderOptions, TagsList } from "@components/features/Filters";
import { Icon } from "@components/shared";

import "./Sidebar.scss";
import { Link } from "react-router-dom";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const NavigationSidebar = () => {
  return (
    <div className="sidebar sidebar--left">
      <div className="sidebar__logo-wrapper">
        <Link to="/">
          <Icon name="logo" />
        </Link>
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
