import { Badge, Box, Image, Flex, Title } from "@mantine/core";
import classes from "./ImageCard.module.css";
import { useNavigate } from "react-router-dom";

export const ImageCard = ({
  img,
  main,
  title,
  size = 450,
  clickable,
  href,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      pos="relative"
      style={{
        cursor: clickable ? "pointer" : null,
        overflow: "hidden",
        borderRadius: "1rem",
      }}
      onClick={() => (clickable ? navigate(href) : null)}
    >
      {main && (
        <Badge pos="absolute" color="violet" top={40} left={40}>
          Nuevo
        </Badge>
      )}
      <Box pos="absolute" w="100%" h="100%" p={40} className={classes.card}>
        <Flex
          align="end"
          h="100%"
          w={
            main
              ? { base: "100%", md: "60%" }
              : { base: "100%", md: size >= 400 ? "60%" : "80%" }
          }
        >
          <Title
            c="white"
            textWrap="balance"
            className={size >= 400 ? classes.large : classes.small}
          >
            {title}
          </Title>
        </Flex>
      </Box>
      <Image h={size} src={img} />
    </Box>
  );
};
