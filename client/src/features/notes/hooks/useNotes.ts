import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as notesApi from "../services/notesApi2";
import type {
  CreateNoteBody,
  NotesQuery,
  UpdateNoteBody,
} from "@/shared/types/note.types";

export const useGetNotes = (filters?: NotesQuery) => {
  return useQuery({
    queryKey: ["notes", filters],
    queryFn: () => notesApi.getNotesReq(filters),
  });
};

export const useGetNote = (noteId: string) => {
  return useQuery({
    queryKey: ["note", noteId],
    queryFn: () => notesApi.getNoteReq(noteId),
    enabled: Boolean(noteId),
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (note: CreateNoteBody) => notesApi.createNoteReq(note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export const useUpdateNote = (noteId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updates: UpdateNoteBody) =>
      notesApi.updateNoteReq(noteId, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note", noteId] });
    },
  });
};

export const useToggleIsArchived = (noteId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => notesApi.toggleIsArchivedReq(noteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note", noteId] });
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteId: string) => notesApi.deleteNoteReq(noteId),
    onSuccess: (_, noteId) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.removeQueries({ queryKey: ["note", noteId] });
    },
  });
};
