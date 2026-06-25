// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const CancelBtn = () => {
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);

  const handleCancel = () => {
    setEditorState("updating");
    setSelectedNoteId(cashedSelectedId);
    setCashedSelectedId(null);
  };

  return (
    <button
      className="note__action note__action--cancel"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
};
