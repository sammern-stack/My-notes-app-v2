import { useEffect, useMemo } from "react";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

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
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content,
    editable,
    onUpdate: ({ editor }) => {
      if (editor?.schema) {
        onChange(editor.getHTML());
      }
    },
  });

  const providerValue = useMemo(() => ({ editor }), [editor]);

  useEffect(() => {
    if (!editor || !editor.schema) return;

    if (editor.getHTML() !== content) {
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [content, editor]);

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
