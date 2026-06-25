// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { TagsProperty } from "./TagsProperty";
import { DatesProperty } from "./DatesProperty";

import "./NoteProperty.scss";

type NotePropertyProps =
  | { property: "tags" }
  | { property: "date"; date: "updatedAt" | "createdAt" };

export const NoteProperty = (props: NotePropertyProps) => {
  return props.property === "tags" ? (
    <TagsProperty />
  ) : (
    <DatesProperty date={props.date} />
  );
};
