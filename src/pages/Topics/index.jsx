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
  Loader,
  Center,
} from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import { useTopic, useDevotional } from "../../hooks";
import { useAuthStore } from "../../store";
import { getInitials } from "../../utils";

const Topics = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { topic, topicLoading } = useTopic(slug);
  const { devotionals, devotionalsLoading } = useDevotional({
    location: user?.location,
    topicId: topic?.id,
  });

  const filteredDevotionals = devotionals
    ?.filter((devos) => {
      if (devos.userId !== user.id) return !devos?.draft;
      return devos;
    })
    .reverse();

  return !topicLoading ? (
    <>
      <Box pos="relative">
        <Button
          pos="absolute"
          color="violet"
          style={{ zIndex: 1 }}
          right={40}
          bottom={40}
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
        {!devotionalsLoading ? (
          filteredDevotionals?.length > 0 ? (
            <Grid>
              {filteredDevotionals.map((devotional) => (
                <Grid.Col span={{ base: 12, md: 6 }} key={devotional.id}>
                  <UnstyledButton
                    w="100%"
                    onClick={() => navigate(`/${topic.slug}/${devotional.id}`)}
                  >
                    <Paper withBorder p={20} radius="md">
                      <Flex align="center" justify="space-between" mah={200}>
                        <Text fw={500}>{devotional.title}</Text>
                        <Avatar color="violet" radius="xl">
                          {getInitials(devotional.user.name)}
                        </Avatar>
                      </Flex>
                    </Paper>
                  </UnstyledButton>
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <Center>
              <Text fw="bold" c="gray.4" my="10%" size="xl">
                No hay devocionales escritos :(
              </Text>
            </Center>
          )
        ) : (
          <Flex align="center" justify="center">
            <Loader color="violet" size="lg" type="dots" />
          </Flex>
        )}
      </Box>
    </>
  ) : (
    <Flex align="center" justify="center" h="80vh">
      <Loader color="violet" size="lg" type="dots" />
    </Flex>
  );
};

export default Topics;
