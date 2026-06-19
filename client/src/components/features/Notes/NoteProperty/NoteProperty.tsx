import { capitalizeStr } from "@/utils";
import { Icon } from "@components/shared";
import "./NoteProperty.scss";

interface NotePropertyProps {
  label: string;
  children: React.ReactNode;
  icon: string;
}

export const NoteProperty = ({
  label,
  children: value,
  icon,
}: NotePropertyProps) => {
  const labelClassName = label.split(" ").join("-");

  return (
    <div className={`note__${labelClassName}`}>
      <div className={`note__${labelClassName}-name`}>
        <Icon name={icon} />
        <p>{capitalizeStr(label)}</p>
      </div>

      <div className={`note__${labelClassName}-value`}>{value}</div>
    </div>
  );
};
