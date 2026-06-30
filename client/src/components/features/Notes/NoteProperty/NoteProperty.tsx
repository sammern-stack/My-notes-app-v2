// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { TagsProperty } from "./TagsProperty";
import { DatesProperty } from "./DatesProperty";
import { IsArchivedProperty } from "./IsArchivedProperty";

import "./NoteProperty.scss";

type NotePropertyProps =
  | { property: "tags" }
  | { property: "status" }
  | { property: "date"; date: "updatedAt" | "createdAt" };

export const NoteProperty = (props: NotePropertyProps) => {
  if (props.property === "tags") {
    return <TagsProperty />;
  }

  if (props.property === "date") {
    return <DatesProperty date={props.date} />;
  }

  if (props.property === "status") {
    return <IsArchivedProperty />;
  }
};
