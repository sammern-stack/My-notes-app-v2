import type { NoteModel } from "@/shared/types";

export const getSortedTags = (notes: NoteModel[]) => {
  const tags = notes.flatMap((note) => note.tags);
  const uniqueTags = [...new Set(tags)];
  return uniqueTags.sort((a, b) => a.localeCompare(b));
};
