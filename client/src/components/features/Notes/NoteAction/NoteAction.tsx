// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore, useNotesStore } from "@stores";
import { capitalizeStr } from "@/utils";
import { Icon } from "@/components/shared";
import "./NoteAction.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type NoteActionProps =
  | { position: "sidebar"; action: "archive" | "delete"; icon: string }
  | { position: "note"; action: "save" | "cancel" };

// ——— Helper ——————————————————————————————————————————————————————————————————————————————————————
const normalizeTags = (tags: string) =>
  tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

// ——— Note Action Component ———————————————————————————————————————————————————————————————————————
export const NoteAction = (props: NoteActionProps) => {
  const editorState = useEditorStore((s) => s.editorState);
  const setEditorState = useEditorStore((s) => s.setEditorState);
  const cashedSelectedId = useEditorStore((s) => s.cashedSelectedId);
  const activeNote = useEditorStore((s) => s.activeNote);
  const setSelectedNoteId = useEditorStore((s) => s.setSelectedNoteId);
  const setCashedSelectedId = useEditorStore((s) => s.setCashedSelectedId);
  const createNewNote = useNotesStore((s) => s.createNewNote);

  if (editorState === "creating" && props.position === "sidebar") return null;

  const renderContent = () =>
    props.position === "sidebar" ? (
      <>
        <Icon name={props.icon} />
        <p>{capitalizeStr(props.action)} Note</p>
      </>
    ) : (
      <p>{props.action === "save" ? "Save Note" : "Cancel"}</p>
    );

  const handleAction = async () => {
    if (props.action === "cancel") {
      setEditorState("updating");
      setSelectedNoteId(cashedSelectedId);
      setCashedSelectedId(null);
    }

    if (props.action === "save" && editorState === "creating") {
      const note = {
        ...activeNote,
        tags: normalizeTags(activeNote.tags),
      };

      const newNote = await createNewNote(note);
      setSelectedNoteId(newNote._id);
      setEditorState("updating");
    }
  };

  return (
    <button
      className={`note__action note__action--${props.action}`}
      onClick={handleAction}
    >
      {renderContent()}
    </button>
  );
};
