import { Button, Flex, Image } from "@mantine/core";
import Image404 from "../../assets/404.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex mih="100vh" align="center" justify="center" direction="column">
      <Image src={Image404} w={{ base: "40rem" }} mt="-5rem" />
      <Button
        variant="outline"
        color="violet"
        mt="-4rem"
        size="xl"
        onClick={() => navigate("/")}
      >
        Regresar al Inicio
      </Button>
    </Flex>
  );
};

export default NotFound;
