import { Container } from "@mantine/core";
import { Header } from "../molecules/Header";

export const Layout = ({ children }) => {
  return (
    <Container size="xl">
      <Header />
      {children}
    </Container>
  );
};
