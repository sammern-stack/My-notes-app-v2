// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEditorStore } from "@/shared/stores";

import { formatDate } from "@/shared/utils";

import { LabelWithIcon } from "@/shared/components";
import ClockIcon from "@/assets/images/icon-clock.svg?react";
import styles from "./NoteProperty.module.scss";

// ——— Types ————————————————————————————————————————————————————————————————————————————————————————
interface DatesPropertyProps {
  date: "updatedAt" | "createdAt";
}

// ——— Component ———————————————————————————————————————————————————————————————————————————————————
export const DatesProperty = ({ date }: DatesPropertyProps) => {
  const { createdAt, updatedAt } = useEditorStore((s) => s.activeNote);

  return (
    <div className={styles[`note__${date}`]}>
      <LabelWithIcon
        className={styles[`note__${date}-label`]}
        icon={ClockIcon}
        label={date === "updatedAt" ? "last edited" : "created at"}
      />

      <div className={styles[`note__${date}-value`]}>
        {date === "updatedAt" ? formatDate(updatedAt) : formatDate(createdAt)}
      </div>
    </div>
  );
};
