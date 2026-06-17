export interface NoteModel {
  title: string;
  tags: string[];
  content: string;
  isArchived: boolean;
}

export type TNote = Omit<NoteModel, "isArchived">;
