import {
  Title,
  Box,
  Flex,
  Group,
  Avatar,
  Tooltip,
  Loader,
} from "@mantine/core";
import { useDevotional } from "../../hooks";
import { useParams } from "react-router-dom";
import { getInitials } from "../../utils";
import edjsHTML from "editorjs-html";
import parse from "html-react-parser";

const Devotional = () => {
  const { devoId } = useParams();
  const { devotional, devotionalLoading } = useDevotional({ devoId });
  const edjsParser = edjsHTML();

  return !devotionalLoading ? (
    <>
      <Group>
        {devotional && devotional.title && (
          <Title size="2rem">{devotional.title}</Title>
        )}
        {devotional && devotional.user && devotional.user.name && (
          <Tooltip label={devotional.user.name} position="right">
            <Avatar color="violet" size="sm">
              {getInitials(devotional.user.name)}
            </Avatar>
          </Tooltip>
        )}
      </Group>
      {devotional && devotional.content && (
        <Box style={{ textAlign: "justify", whiteSpace: "pre" }} mt={20}>
          {parse(edjsParser.parse(devotional.content).join(""))}
        </Box>
      )}
    </>
  ) : (
    <Flex align="center" justify="center" h="80vh">
      <Loader color="violet" size="lg" type="dots" />
    </Flex>
  );
};

export default Devotional;
