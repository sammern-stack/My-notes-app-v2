// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { create } from "zustand";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
type Purpose = "delete" | "archive" | "restore" | null;

interface DialogStore {
  dialogIsOpen: boolean;
  setDialogIsOpen: (state: boolean) => void;

  dialogPurpose: Purpose;
  setDialogPurpose: (purpose: Purpose) => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialogIsOpen: false,
  setDialogIsOpen: (state) => set({ dialogIsOpen: state }),

  dialogPurpose: null,
  setDialogPurpose: (purpose) => set({ dialogPurpose: purpose }),
}));
