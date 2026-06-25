// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { PageTitle } from "@/components/common";
import { SearchBar } from "@components/features/Filters";
import { LabelWithIcon } from "@/components/shared";

import "./Header.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Header = () => (
  <div className="page__header">
    <PageTitle />

    <div className="page__header-content">
      <SearchBar />

      <LabelWithIcon
        as="button"
        className="page__settings-toggle"
        icon="icon-settings"
      />
    </div>
  </div>
);
