import {
  Flex,
  Image,
  Avatar,
  Menu,
  UnstyledButton,
  Group,
  Text,
  rem,
  Box,
} from "@mantine/core";
import {
  IconSettings2,
  IconLogout,
  IconMessageDots,
} from "@tabler/icons-react";

export const Header = () => {
  return (
    <Flex align="center" justify="space-between" py={30}>
      <Image src="/da_black.svg" w={150} />
      <Menu position="bottom-end">
        <Menu.Target>
          <UnstyledButton>
            <Group>
              <Avatar color="violet" radius="xl">
                UN
              </Avatar>
              <Box style={{ flex: 1 }} visibleFrom="sm">
                <Text size="sm" fw={500}>
                  User Name
                </Text>
                <Text c="dimmed" size="xs">
                  Tierra Nueva
                </Text>
              </Box>
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconSettings2 style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Ajustes
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessageDots style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Peticiones
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconLogout style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Cerrar Sesión
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
};
