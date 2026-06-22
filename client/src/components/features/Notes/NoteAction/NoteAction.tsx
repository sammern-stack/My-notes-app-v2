import { useEditorStore, useNotesStore } from "@stores";
import { capitalizeStr } from "@/utils";
import { Icon } from "@/components/shared";
import "./NoteAction.scss";

type NoteActionProps =
  | { position: "sidebar"; action: "archive" | "delete"; icon: string }
  | { position: "note"; action: "save" | "cancel" };

export const NoteAction = (props: NoteActionProps) => {
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const selectedNote = useEditorStore((s) => s.selectedNote);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const createNewNote = useNotesStore((s) => s.createNewNote);

  const renderContent = () =>
    props.position === "sidebar" ? (
      <>
        <Icon name={props.icon} />
        <p>{capitalizeStr(props.action)} Note</p>
      </>
    ) : (
      <p>{props.action === "save" ? "Save Note" : "Cancel"}</p>
    );

  return (
    <button
      className={`note__action note__action--${props.action}`}
      onClick={async () => {
        if (props.action === "cancel") {
          setEditorState("updating");
          setSelectedNoteId(cashedSelectedId);
          setCashedSelectedId(null);
        }

        if (props.action === "save" && editorState === "creating") {
          const note = {
            ...selectedNote,
            tags: selectedNote.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
            content: "temporary content"
          };

          const newNote = await createNewNote(note);
          setSelectedNoteId(newNote._id);
          setEditorState("updating");
        }
      }}
    >
      {renderContent()}
    </button>
  );
};
