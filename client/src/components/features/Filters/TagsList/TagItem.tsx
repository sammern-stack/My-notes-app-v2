// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { capitalizeStr } from "@/utils";
import { Icon } from "@/components/shared";
import "./TagsList.scss";

interface TagItemProps {
  tag: string;
}

export const TagItem = (props: TagItemProps) => {
  return (
    <div className="sidebar__tag-item">
      <Icon name="icon-tag" />
      <p>{capitalizeStr(props.tag)}</p>
    </div>
  );
};
