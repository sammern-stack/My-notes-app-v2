import { Schema, model } from "mongoose";
import type { NoteModel } from "@types";

const NoteSchema = new Schema<NoteModel>(
  {
    title: {
      type: String,
      default: "New Note",
    },

    tags: {
      type: [String],
      required: [true, "At least one tag is required"],
    },

    content: {
      type: String,
      required: [true, "Content about the note is required"],
      minLength: [
        3,
        "Note should at least contain one word with at least 3 characters",
      ],
    },

    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Note = model<NoteModel>("note", NoteSchema);
export default Note;
