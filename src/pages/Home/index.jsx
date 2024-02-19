import { Loader, Grid, Flex } from "@mantine/core";
import { ImageCard } from "../../components";
import { useTopic } from "../../hooks/useTopic";

const Home = () => {
  const { topics, topicsLoading } = useTopic();

  return (
    <>
      {!topicsLoading ? (
        <>
          <ImageCard
            img={topics[topics?.length - 1].imgURL}
            main
            title={topics[topics?.length - 1].title}
            clickable
            href={`/topic/${topics[topics?.length - 1].slug}`}
          />
          <Grid mt={20}>
            {topics.slice(0, -1).reverse().map((topic) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={topic.id}>
                <ImageCard
                  img={topic.imgURL}
                  title={topic.title}
                  size={250}
                  order={3}
                  clickable
                  href={`/topic/${topic.slug}`}
                />
              </Grid.Col>
            ))}
          </Grid>
        </>
      ) : (
        <Flex align="center" justify="center" h="80vh">
          <Loader color="violet" size="lg" type="dots" />
        </Flex>
      )}
    </>
  );
};

export default Home;
