import { useMemo } from "react";
import { EditorContent, EditorContext } from "@tiptap/react";
import { useTiptapEditor } from "@/features/notes/hooks/useTiptapEditor";

import styles from "./NoteEditor.module.scss";

interface NoteEditorProps {
  content: string;
  onChange: (html: string) => void;
  editable?: boolean;
}

export const NoteEditor = ({
  content,
  onChange,
  editable = true,
}: NoteEditorProps) => {
  const editor = useTiptapEditor({ content, editable, onChange });
  const providerValue = useMemo(() => ({ editor }), [editor]);

  if (!editor) return null;

  return (
    <EditorContext.Provider value={providerValue}>
      <div className={styles["note-editor"]}>
        <EditorContent
          editor={editor}
          className={styles["note-editor__content"]}
        />
      </div>
    </EditorContext.Provider>
  );
};
