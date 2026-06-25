// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { capitalizeStr } from "@utils";
import { Icon } from "./Icon";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface LabelWithIconProps {
  className: string;
  icon: string;
  label: string;
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const LabelWithIcon = (props: LabelWithIconProps) => (
  <div className={props.className}>
    <Icon name={props.icon} />
    <p>{capitalizeStr(props.label)}</p>
  </div>
);
