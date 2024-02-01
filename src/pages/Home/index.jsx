import { Grid } from "@mantine/core";
import { ImageCard } from "../../components";

const Home = () => {
  return (
    <>
      <ImageCard
        img="https://images.unsplash.com/photo-1640906152676-dace6710d24b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        main
        title="Este es el nombre de un tema que esta largo muy muy muy largo"
        clickable
      />
      <Grid mt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <ImageCard
            img="https://images.unsplash.com/photo-1659835547789-cb00dbd213c4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Este es un titulo"
            size={250}
            order={3}
            clickable
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
