import { useEffect } from "react";
import { useConfigStore } from "@stores";

export const useStartApp = () => {
  const theme = useConfigStore((s) => s.theme);
  const font = useConfigStore((s) => s.font);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = `font--${font}`;
  }, [theme, font]);
};
