// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { capitalizeStr } from "@utils";
import { Icon } from "@/components/shared";
import "./RenderOptions.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type Option = "all" | "archived";

interface RenderOptionProps {
  option: Option;
}

export const RenderOption = (props: RenderOptionProps) => {
  return (
    <button className="sidebar__render-option">
      <Icon
        name={props.option === "all" ? "icon-home" : "icon-archive"}
        width="20"
      />
      <p>{capitalizeStr(props.option)} Notes</p>
    </button>
  );
};
