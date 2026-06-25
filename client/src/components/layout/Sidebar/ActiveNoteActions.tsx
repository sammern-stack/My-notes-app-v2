// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { NoteAction } from "@components/features/Notes";

import "./Sidebar.scss";

// ——— Components ——————————————————————————————————————————————————————————————————————————————————
export const ActiveNoteActions = () => {
  return (
    <div className="sidebar sidebar--right">
      <NoteAction action="archive" />
      <NoteAction action="delete" />
    </div>
  );
};
