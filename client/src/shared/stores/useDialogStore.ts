import { create } from "zustand";

type DialogType = "deleteNote" | "archiveNote" | "restoreNote";
type DialogPayload = Record<string, unknown>;

type Dialog = {
  type: DialogType;
  payload: DialogPayload;
} | null;

interface DialogStore {
  dialog: Dialog;
  openDialog: (type: DialogType, payload?: DialogPayload) => void;
  closeDialog: () => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  dialog: null,
  openDialog: (type, payload = {}) => set({ dialog: { type, payload } }),
  closeDialog: () => set({ dialog: null }),
}));
