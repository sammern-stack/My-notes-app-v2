import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import { useEditorStore } from "../../stores/editorStore";
import { useCreateNote, useUpdateNote } from "../useNotes";
import { normalizeTags } from "../../utils/normalizeTags";

export const useSaveNote = () => {
  const { activeNote, editorState, selectedNoteId } = useEditorStore(
    useShallow((s) => ({
      activeNote: s.activeNote,
      editorState: s.editorState,
      selectedNoteId: s.selectedNoteId,
    })),
  );
  const { mutateAsync: createNote } = useCreateNote();
  const { mutateAsync: updateNote } = useUpdateNote(selectedNoteId);

  return useCallback(async () => {
    const { setSelectedNoteId, setEditorState, setActiveNote } =
      useEditorStore.getState();

    if (editorState === "creating") {
      const newNote = await createNote({
        ...activeNote,
        tags: normalizeTags(activeNote.tags),
      });

      setSelectedNoteId(newNote._id);
      setEditorState("updating");
    }

    if (selectedNoteId && editorState === "updating") {
      const updatedNote = await updateNote({
        title: activeNote.title,
        tags: normalizeTags(activeNote.tags),
        content: activeNote.content,
      });

      setSelectedNoteId(updatedNote._id);
      setActiveNote({
        ...updatedNote,
        tags: updatedNote.tags.join(", "),
      });
    }
  }, [activeNote, createNote, editorState, selectedNoteId, updateNote]);
};
