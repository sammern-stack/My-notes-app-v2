// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const UntitledNote = () => {
  const editorState = useEditorStore((s) => s.editorState);

  if (editorState !== "creating") return null;

  return (
    <div className="notes__card notes__card--active notes__card-title">
      Untitled Note
    </div>
  );
};
