// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { NoteAction } from "@/features/notes";

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
