import { capitalizeStr } from "@/utils";
import "./NoteAction.scss";
import { Icon } from "@/components/shared";

type NoteActionProps =
  | { position: "sidebar"; action: "archive" | "delete"; icon: string }
  | { position: "note"; action: "save" | "cancel" };

export const NoteAction = (props: NoteActionProps) => {
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
    <button className={`note__action note__action--${props.action}`}>
      {renderContent()}
    </button>
  );
};
