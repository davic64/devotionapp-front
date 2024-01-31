import { useEffect, useRef } from "react";
import { Box } from "@mantine/core";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import "./styles.css";

export const Editor = ({ saveData }) => {
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

      data: {},
    });
  }, []);

  useEffect(() => {
    saveData(editorInstanceRef.current);
  }, [editorInstanceRef.current]);
  return <Box ref={editorRef} w="100%" />;
};
