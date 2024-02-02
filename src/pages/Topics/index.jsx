import { ImageCard } from "../../components";
import {
  Grid,
  Paper,
  UnstyledButton,
  Text,
  Avatar,
  Flex,
  Box,
  Button,
} from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import { useTopic } from "../../hooks/useTopic";

const Topics = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { topic, topicLoading } = useTopic(slug);

  return ~topicLoading ? (
    <>
      <Box pos="relative">
        <Button
          pos="absolute"
          color="violet"
          style={{ zIndex: 1 }}
          right={40}
          bottom={40}
          variant="outline"
          visibleFrom="sm"
          onClick={() => navigate(`/${slug}/devotional`)}
        >
          Escribir Devocional
        </Button>
        <ImageCard img={topic?.imgURL} title={topic?.title} />
      </Box>
      <Box mt={40}>
        <Button
          mb={15}
          color="violet"
          size="lg"
          fullWidth
          hiddenFrom="sm"
          variant="light"
          onClick={() => navigate(`/${slug}/devotional`)}
        >
          Escribir Devocional
        </Button>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <UnstyledButton w="100%">
              <Paper withBorder p={20} radius="md">
                <Flex align="center" justify="space-between" mah={200}>
                  <Text fw={500}>Título del devocional</Text>
                  <Avatar color="violet" radius="xl">
                    UN
                  </Avatar>
                </Flex>
              </Paper>
            </UnstyledButton>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <UnstyledButton w="100%">
              <Paper withBorder p={20} radius="md">
                <Flex align="center" justify="space-between" mah={200}>
                  <Text fw={500}>Título del devocional</Text>
                  <Avatar color="violet" radius="xl">
                    UN
                  </Avatar>
                </Flex>
              </Paper>
            </UnstyledButton>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Topics;
