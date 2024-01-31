import { Title, Box, Text, Group, Avatar, Tooltip } from "@mantine/core";

const Devotional = () => {
  return (
    <>
      <Text size="sm" c="violet">
        Nombre del Tema
      </Text>
      <Group>
        <Title size="2rem">Titulo Devocional</Title>
        <Tooltip label="Nombre Usuario" position="right">
          <Avatar color="violet" size="sm">
            NU
          </Avatar>
        </Tooltip>
      </Group>
      <Box style={{ textAlign: "justify" }} mt={20}>
        <Text>A ver que tal</Text>
      </Box>
    </>
  );
};

export default Devotional;
