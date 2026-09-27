import SansSerifIcon from "@/assets/images/icon-font-sans-serif.svg?react";
import SerifIcon from "@/assets/images/icon-font-serif.svg?react";
import MonospaceIcon from "@/assets/images/icon-font-monospace.svg?react";

export const fontOptions = [
  {
    value: "inter",
    id: "font-inter",
    label: "Sans-serif",
    description: "Clean and modern, easy to read",
    Icon: SansSerifIcon,
  },
  {
    value: "noto-serif",
    id: "font-noto-serif",
    label: "Serif",
    description: "Classic and elegant for a timeless feel.",
    Icon: SerifIcon,
  },
  {
    value: "source-code-pro",
    id: "font-source-code-pro",
    label: "Monospace",
    description: "Code-like, great for a technical vibe",
    Icon: MonospaceIcon,
  },
] as const;
