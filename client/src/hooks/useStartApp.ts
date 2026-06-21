import { useEffect } from "react";
import { useConfigStore, useNotesStore } from "@stores";

export const useStartApp = () => {
  const theme = useConfigStore((s) => s.theme);
  const font = useConfigStore((s) => s.font);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font", font);
  }, [theme, font]);

  const setNotes = useNotesStore((s) => s.setNotes);

  useEffect(() => {
    setNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
