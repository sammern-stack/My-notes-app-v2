import { NoteAction } from "@components/features/Notes";
import "./Sidebar.scss";

export const ActiveNoteActions = () => {
  return (
    <div className="sidebar sidebar--right">
      <NoteAction position="sidebar" action="archive" icon="icon-archive" />
      <NoteAction position="sidebar" action="delete" icon="icon-delete" />
    </div>
  );
};
