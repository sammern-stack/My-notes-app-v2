import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as notesApi from "../services/notesApi";
import type {
  CreateNoteBody,
  NotesQuery,
  UpdateNoteBody,
} from "@/shared/types/note.types";

export const useGetNotes = (filters?: NotesQuery) => {
  return useQuery({
    queryKey: ["notes", filters],
    queryFn: () => notesApi.getNotesReq(filters),
    select: (response) =>
      [...response.data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
  });
};

export const useGetNote = (noteId: string) => {
  return useQuery({
    queryKey: ["note", noteId],
    queryFn: () => notesApi.getNoteReq(noteId),
    enabled: Boolean(noteId),
    select: (response) => response.data,
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (note: CreateNoteBody) =>
      (await notesApi.createNoteReq(note)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
};

export const useUpdateNote = (noteId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updates: UpdateNoteBody) =>
      (await notesApi.updateNoteReq(noteId, updates)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note", noteId] });
    },
  });
};

export const useToggleIsArchived = (noteId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => (await notesApi.toggleIsArchivedReq(noteId)).data,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note", noteId] });
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteId: string) =>
      (await notesApi.deleteNoteReq(noteId)).data,
    onSuccess: (_, noteId) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.removeQueries({ queryKey: ["note", noteId] });
    },
  });
};
