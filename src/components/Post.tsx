import { Box, Flex, Text } from "@chakra-ui/layout";
import ProfileIcon from "../assets/profile_icon";

export type PostType = {
  user: {
    name: string;
    username: string;
  };
  content: string;
};

type Props = {
  body: PostType;
  options?: {
    borderBottom?: boolean;
  };
};

export default function Post({ body, options }: Props) {
  return (
    <Flex
      minH="96px"
      borderBottom={options?.borderBottom ? "1px solid black" : ""}
    >
      <Box
        w="40px"
        h="40px"
        flexShrink={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="0 1px 1px 0"
        borderColor="black"
        borderStyle="solid"
        borderRadius="0 0 10px 0"
      >
        <ProfileIcon />
      </Box>
      <Flex flexDir="column" mx="10px" my="8px">
        <Flex alignItems="center" gap={2}>
          <Text fontSize={14}>{body.user.name}</Text>
          <Text fontSize={12}>{body.user.username}</Text>
        </Flex>
        <Text fontSize={12} mt="10px">
          {body.content}
        </Text>
      </Flex>
    </Flex>
  );
}
