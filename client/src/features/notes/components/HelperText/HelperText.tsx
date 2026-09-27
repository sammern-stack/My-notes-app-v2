import styles from "./HelperText.module.scss";
import { useHelperText } from "@/features/filters";

export const HelperText = () => {
  const helperText = useHelperText();
  if (!helperText) return null;
  return <div className={styles.helperText}>{helperText}</div>;
};
