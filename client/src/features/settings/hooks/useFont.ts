import { useEffect } from "react";
import { useFontStore } from "@/features/settings";

export const useFont = () => {
  const font = useFontStore((s) => s.font);
  const setFont = useFontStore((s) => s.setFont);

  useEffect(() => {
    document.documentElement.setAttribute("data-font", font);
  }, [font]);

  return { font, setFont };
};
