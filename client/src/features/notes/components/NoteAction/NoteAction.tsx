// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { SaveBtn } from "./SaveBtn";
import { CancelBtn } from "./CancelBtn";
import { DeleteBtn } from "./DeleteBtn";
import { ArchiveBtn } from "./ArchiveBtn";
import { CreateBtn } from "./CreateBtn";

import "./NoteAction.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface NoteActionProps {
  action: "archive" | "delete" | "save" | "cancel" | "create" ;
}

// ——— Note Action Component ———————————————————————————————————————————————————————————————————————
export const NoteAction = ({ action }: NoteActionProps) => {
  const Action = {
    save: SaveBtn,
    cancel: CancelBtn,
    delete: DeleteBtn,
    archive: ArchiveBtn,
    create: CreateBtn,
  }[action];

  return <Action />;
};
