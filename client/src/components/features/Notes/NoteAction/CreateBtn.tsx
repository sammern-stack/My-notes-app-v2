// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@/stores";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const CreateBtn = () => {
  const startCreatingNote = useEditorStore((s) => s.startCreatingNote);

  const handleCreateNote = () => startCreatingNote();

  return (
    <button className="notes__create-btn" onClick={handleCreateNote}>
      + Create New Note
    </button>
  );
};
