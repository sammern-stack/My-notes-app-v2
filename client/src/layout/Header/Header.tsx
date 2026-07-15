// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { PageTitle, LabelWithIcon } from "@/shared/components";
import { SearchBar } from "@/features/settings";

import "./Header.scss";
import { Link } from "react-router-dom";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Header = () => (
  <div className="page__header">
    <PageTitle />

    <div className="page__header-content">
      <SearchBar />

      <Link to="/settings">
        <LabelWithIcon
          as="button"
          className="page__settings-toggle"
          icon="icon-settings"
        />
      </Link>
    </div>
  </div>
);
