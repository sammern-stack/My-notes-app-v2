// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

import { LabelWithIcon } from "@components/shared";

import type { InputChangeEvent } from "@types";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const TagsProperty = () => {
  const { tags } = useEditorStore((s) => s.activeNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);

  const handleNoteTags = (e: InputChangeEvent) =>
    setActiveNoteField("tags", e.target.value);

  return (
    <div className="note__tags">
      <LabelWithIcon className="note__tags-label" icon="icon-tag" label="tags" />

      <div className="note__tags-value">
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
