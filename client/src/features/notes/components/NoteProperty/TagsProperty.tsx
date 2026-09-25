// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@/shared/stores";

import { LabelWithIcon } from "@/shared/components";

import type { InputChangeEvent } from "@/shared/types/react.types";
import styles from "./NoteProperty.module.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const TagsProperty = () => {
  const { tags } = useEditorStore((s) => s.activeNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);

  const handleNoteTags = (e: InputChangeEvent) =>
    setActiveNoteField("tags", e.target.value);

  return (
    <div className={styles["note__tags"]}>
      <LabelWithIcon
        className={styles["note__tags-label"]}
        icon="icon-tag"
        label="tags"
      />

      <div className={styles["note__tags-value"]}>
        <input
          type="text"
          placeholder="Add tags separated by commas (e.g. Work, Planning)"
          value={tags}
          onChange={handleNoteTags}
        />
      </div>
    </div>
  );
};
