export interface NoteModel {
  _id: string;
  title: string;
  tags: string[];
  content: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TNote = Pick<NoteModel, "title" | "tags" | "content">;

export type NotesQuery = Partial<Pick<NoteModel, "tags" | "isArchived">>;
export type NotesParams = Partial<{ id: string }>;

export type CreateNoteBody = TNote;
export type UpdateNoteBody = Partial<TNote>;
