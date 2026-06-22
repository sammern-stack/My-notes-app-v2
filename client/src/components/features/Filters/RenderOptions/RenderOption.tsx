// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { capitalizeStr } from "@utils";
import { Icon } from "@/components/shared";
import "./RenderOptions.scss";
import { useFiltersStore } from "@stores";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type Option = "all" | "archived";

interface RenderOptionProps {
  option: Option;
}

export const RenderOption = (props: RenderOptionProps) => {
  const renderOption = useFiltersStore((s) => s.renderOption);
  const setRenderOption = useFiltersStore((s) => s.setRenderOption);

  const handleSelectOption = () => setRenderOption(props.option);

  return (
    <button
      className={`sidebar__render-option ${renderOption === props.option ? "sidebar__render-option--active" : ""}`}
      onClick={handleSelectOption}
    >
      <Icon
        name={props.option === "all" ? "icon-home" : "icon-archive"}
        width="20"
      />
      <p>{capitalizeStr(props.option)} Notes</p>

      {renderOption === props.option && (
        <Icon name="icon-chevron-right"/>
      )}
    </button>
  );
};
