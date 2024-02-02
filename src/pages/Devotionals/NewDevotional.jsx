import { useState } from "react";
import { Box, Button, Flex, Group, Input, Text, Tooltip } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { Editor } from "../../components";
import { useDevotional } from "../../hooks";
import { useParams } from "react-router-dom";

const NewDevotional = () => {
  const [currentData, setCurrentData] = useState(null);
  const [devoTitle, setDevoTitle] = useState("");
  const { slug } = useParams();
  const { createDevotional } = useDevotional();

  const save = (typeSave) => {
    currentData
      .save()
      .then((data) => {
        const dataTopic = {
          title: devoTitle,
          content: data,
          draft: typeSave === "draft",
          topicSlug: slug,
        };
        createDevotional(dataTopic);
      })
      .catch((error) => {
        console.error("Saving failed: ", error);
      });
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Group>
          <Tooltip
            label="Crea un nuevo Devocional para compartirlo con los jóvenes de tu localidad."
            position="bottom-start"
          >
            <IconInfoCircle height={20} width={20} color="gray" />
          </Tooltip>
          <Text fw={500} visibleFrom="sm">
            Nuevo Devocional
          </Text>
        </Group>
        <Group>
          <Button
            color="violet"
            variant="outline"
            onClick={() => save("draft")}
          >
            Guardar
          </Button>
          <Button color="violet" onClick={() => save("publish")}>
            Publicar
          </Button>
        </Group>
      </Flex>
      <Box mt={20}>
        <Input
          fw={700}
          variant="unstyled"
          placeholder="Título del Devocional"
          size="2rem"
          mb={30}
          value={devoTitle}
          onChange={(e) => setDevoTitle(e.target.value)}
        />
      </Box>
      <Editor saveData={setCurrentData} />
    </>
  );
};

export default NewDevotional;
