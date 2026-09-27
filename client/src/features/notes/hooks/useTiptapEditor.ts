import { useEffect } from "react";
import { useEditor } from "@tiptap/react";
import { editorExtensions } from "@/config/editor.config";

interface TiptapEditorOptions {
  content: string;
  editable: boolean;
  onChange: (html: string) => void;
}

export const useTiptapEditor = ({
  content,
  editable,
  onChange,
}: TiptapEditorOptions) => {
  const editor = useEditor({
    extensions: editorExtensions,
    content,
    editable,
    onUpdate: ({ editor }) => {
      if (editor?.schema) {
        onChange(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    if (!editor || !editor.schema) return;

    if (editor.getHTML() !== content) {
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [content, editor]);

  return editor;
};
