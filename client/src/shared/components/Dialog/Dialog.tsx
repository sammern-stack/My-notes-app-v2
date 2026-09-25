// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import {
  useDialogStore,
  useEditorStore,
  useFiltersStore,
} from "@/shared/stores";
import { capitalizeStr } from "@/shared/utils";
import { Icon } from "@/shared/components";
import {
  useDeleteNote,
  useGetNotes,
  useToggleIsArchived,
} from "@/features/notes";
import "./Dialog.scss";

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const Dialog = () => {
  const dialogIsOpen = useDialogStore((s) => s.dialogIsOpen);
  const setDialogIsOpen = useDialogStore((s) => s.setDialogIsOpen);
  const dialogPurpose = useDialogStore((s) => s.dialogPurpose);
  const selectedNoteId = useEditorStore((s) => s.selectedNoteId);
  const selectFirstNote = useEditorStore((s) => s.selectFirstNote);
  const setActiveNoteField = useEditorStore((s) => s.setActiveNoteField);
  const getQuery = useFiltersStore((s) => s.getQuery);
  const { refetch: refetchNotes } = useGetNotes(getQuery());
  const { mutateAsync: deleteNote } = useDeleteNote();
  const { mutateAsync: toggleIsArchived } = useToggleIsArchived(
    selectedNoteId ?? "",
  );

  if (!dialogIsOpen || !dialogPurpose) return null;

  const dialogContent = {
    delete: {
      icon: "icon-delete",
      title: "Delete Note",
      content:
        "Are you sure you want to permanently delete this note? This action cannot be undone.",
      onClick: async () => {
        if (!selectedNoteId) return;
        await deleteNote(selectedNoteId);
        const { data: notes = [] } = await refetchNotes();
        selectFirstNote(notes);
        setDialogIsOpen(false);
      },
    },

    archive: {
      icon: "icon-archive",
      title: "Archive Note",
      content:
        "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",
      onClick: async () => {
        if (!selectedNoteId) return;
        await toggleIsArchived();
        setDialogIsOpen(false);
        setActiveNoteField("isArchived", true);
      },
    },

    restore: {
      icon: "icon-restore",
      title: "Restore Note",
      content: "Are you sure you want to restore this note?",
      onClick: async () => {
        if (!selectedNoteId) return;
        await toggleIsArchived();
        setDialogIsOpen(false);
        setActiveNoteField("isArchived", false);
      },
    },
  }[dialogPurpose];

  const handleCancel = () => setDialogIsOpen(false);

  return (
    <>
      <div className="page__dialog">
        <div className="page__dialog-content">
          <div className="page__dialog-icon">
            <Icon name={dialogContent.icon} />
          </div>

          <div className="page__dialog-body">
            <div className="page__dialog-title">{dialogContent.title}</div>

            <div className="page__dialog-description">
              {dialogContent.content}
            </div>
          </div>
        </div>

        <div className="page__dialog-divider"></div>

        <div className="page__dialog-btns">
          <button
            className="page__dialog-btn page__dialog-btn--cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className={`page__dialog-btn page__dialog-btn--${dialogPurpose}`}
            onClick={dialogContent.onClick}
          >
            {capitalizeStr(dialogPurpose)}
          </button>
        </div>
      </div>

      <div className="page__dialog-backdrop"></div>
    </>
  );
};
