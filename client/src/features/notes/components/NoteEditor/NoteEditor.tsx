// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { useEffect, useMemo } from "react";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./NoteEditor.scss";

// ——— Types ———————————————————————————————————————————————————————————————————————————————————————
interface NoteEditorProps {
  content: string;
  onChange: (html: string) => void;
  editable?: boolean;
}

// ——— Constants ———————————————————————————————————————————————————————————————————————————————————
const extensions = [StarterKit];

// ——— Note Editor Component ———————————————————————————————————————————————————————————————————————
export const NoteEditor = ({
  content,
  onChange,
  editable = true,
}: NoteEditorProps) => {
  const editor = useEditor({
    extensions,
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
      <div className="note-editor">
        <EditorContent editor={editor} className="note-editor__content" />
      </div>
    </EditorContext.Provider>
  );
};
