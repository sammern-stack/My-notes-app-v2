// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@stores";

import { formatDate } from "@/utils";

import { LabelWithIcon } from "@components/shared";

// ——— Types ————————————————————————————————————————————————————————————————————————————————————————
interface DatesPropertyProps {
  date: "updatedAt" | "createdAt";
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DatesProperty = ({ date }: DatesPropertyProps) => {
  const { createdAt, updatedAt } = useEditorStore((s) => s.activeNote);

  return (
    <div className={`note__${date}`}>
      <LabelWithIcon
        className={`note__${date}-label`}
        icon="icon-clock"
        label={date === "updatedAt" ? "last edited" : "created at"}
      />

      <div className={`note__${date}-value`}>
        {date === "updatedAt" ? formatDate(updatedAt) : formatDate(createdAt)}
      </div>
    </div>
  );
};
