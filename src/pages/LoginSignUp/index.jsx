import {
  Flex,
  Box,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Image,
  Center,
  Text,
  Select,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";

const LoginSignUp = () => {
  const form = useForm({
    initialValues: {
      name: "",
      local: "",
      email: "",
      pass: "",
    },
    validate: {
      name: isNotEmpty("Escribe tu nombre"),
      local: isNotEmpty("Selecciona tu localidad"),
      email: isEmail("Correo electrónico inválido"),
      pass: (val) => (val.length <= 8 ? "Escribe al menos 8 caracteres" : null),
    },
  });

  const [type, toggle] = useToggle(["login", "signup"]);

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box miw={320}>
        <Center mb={25}>
          <Image src="/da_black.svg" w={200} />
        </Center>
        <form onSubmit={form.onSubmit(console.log)}>
          <Stack>
            {type === "signup" && (
              <>
                <TextInput
                  label="Nombre"
                  placeholder="Nombre Completo"
                  size="lg"
                  {...form.getInputProps("name")}
                />
                <Select
                  label="Localidad"
                  size="lg"
                  placeholder="Tu Localidad"
                  data={["Tierra Nueva", "Wamerú"]}
                  {...form.getInputProps("local")}
                />
              </>
            )}
            <TextInput
              label="Correo Electrónico"
              placeholder="mail@mail.com"
              size="lg"
              {...form.getInputProps("email")}
            />
            <Box w="full">
              <PasswordInput
                label="Contraseña"
                placeholder="••••••••"
                size="lg"
                {...form.getInputProps("pass")}
              />
              {/* {type === "login" && ( TODO: Waiting for backend service
                <Text
                  mt={5}
                  size="sm"
                  style={{
                    userSelect: "none",
                    cursor: "pointer",
                    float: "right",
                  }}
                >
                  Olvidé mi contraseña
                </Text>
              )} */}
            </Box>
          </Stack>
          <Button
            variant="filled"
            color="violet"
            size="lg"
            fullWidth
            mt={20}
            type="submit"
          >
            {type === "login" ? "Iniciar Sesión" : "Registrarse"}
          </Button>
        </form>
        <Text align="center" mt={40} onClick={() => toggle()}>
          {type === "login"
            ? "¿Aún tienes una cuenta?"
            : "¿Ya tienes una cuenta?"}{" "}
          <Text
            component="span"
            c="violet"
            fw={500}
            style={{ cursor: "pointer" }}
          >
            {type === "login" ? "Crea una aquí" : "Inicia sesión aquí"}
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginSignUp;
