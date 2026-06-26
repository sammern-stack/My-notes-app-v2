export interface NoteModel {
  title: string;
  tags: string[];
  content: string;
  isArchived: boolean;
}

export type TNote = Omit<NoteModel, "isArchived">;

export type NotesQuery = Partial<Pick<NoteModel, "tags" | "isArchived">>;
export type NotesParams = Partial<{ id: string }>;

export type CreateNoteBody = TNote;
export type UpdateNoteBody = Partial<TNote>;
