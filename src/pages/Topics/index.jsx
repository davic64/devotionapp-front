import { Layout, ImageCard } from "../../components";
import { Grid, Paper, UnstyledButton, Text, Avatar, Flex } from "@mantine/core";

const Topics = () => {
  return (
    <Layout>
      <ImageCard
        img="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Este es el nombre de un tema largo"
      />
      <Grid mt={40}>
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
    </Layout>
  );
};

export default Topics;
