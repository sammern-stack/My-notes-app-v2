import { useEditorStore } from "@/shared/stores";
import { useGetNote } from "@/features/notes";
import styles from "./NoteAction.module.scss";

export const CancelBtn = () => {
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const setActiveNote = useEditorStore((s) => s.setActiveNote);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const { refetch: refetchNote } = useGetNote(selectedNoteId ?? "");

  const handleCancel = async () => {
    if (editorState === "creating") {
      setEditorState("updating");
      setSelectedNoteId(cashedSelectedId);
      setCashedSelectedId(null);
    }

    if (selectedNoteId && editorState === "updating") {
      const { data: prevNote } = await refetchNote();
      if (!prevNote) return;
      setActiveNote({
        title: prevNote.title,
        tags: prevNote.tags.join(", "),
        content: prevNote.content,
        createdAt: prevNote.createdAt,
        updatedAt: prevNote.updatedAt,
        isArchived: prevNote.isArchived,
      });
    }
  };

  return (
    <button
      className={`${styles["note__action"]} ${styles["note__action--cancel"]}`}
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
};
