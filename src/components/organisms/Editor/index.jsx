import { useEffect, useRef } from "react";
import { Box } from "@mantine/core";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import "./styles.css";

export const Editor = ({ saveData, devotional }) => {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    editorInstanceRef.current = new EditorJS({
      holder: editorRef.current,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["bold", "italic"],
          config: {
            levels: [1, 2, 3],
            defaultLevel: 1,
          },
        },
        paragraph: {
          inlineToolbar: ["bold", "italic"],
        },
      },

      placeholder: "Escribe tu devocional...",

      data: devotional?.content,
    });

    return () => {
      if (editorInstanceRef.current) {
        try {
          editorInstanceRef.current.destroy();
        } catch (error) {
          console.error("Error al destruir la instancia del EditorJS:", error);
        } finally {
          editorInstanceRef.current = null;
        }
      }
    };
  }, [devotional]);

  useEffect(() => {
    saveData(editorInstanceRef.current);
  }, [editorInstanceRef.current]);

  return <Box ref={editorRef} w="100%" />;
};
