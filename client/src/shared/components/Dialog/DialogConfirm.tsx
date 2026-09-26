import styles from "./Dialog.module.scss";
import { useDialogStore } from "@/shared/stores";
import type { PropsWithChildren } from "react";

interface DialogConfirmProps extends PropsWithChildren {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  action: () => void | Promise<void>;
}

export const DialogConfirm = ({
  children,
  title,
  icon: Icon,
  action,
}: DialogConfirmProps) => {
  const { closeDialog } = useDialogStore.getState();
  const handleCancel = () => closeDialog();

  return (
    <div className={styles.dialog}>
      <div className={styles.dialog__content}>
        <div className={styles.dialog__icon}>
          <Icon />
        </div>
        <div className={styles.dialog__body}>
          <h2 className={styles.dialog__title}>{title}</h2>
          <p className={styles.dialog__desc}>{children}</p>
        </div>
      </div>
      <div className={styles.dialog__divider}></div>
      <div className={styles.dialog__actions}>
        <button
          className={`${styles.dialog__action} ${styles["dialog__action--cancel"]}`}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className={`${styles.dialog__action} ${styles["dialog__action--confirm"]}`}
          onClick={action}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
