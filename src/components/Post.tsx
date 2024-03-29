import { Box, Flex, Text } from "@chakra-ui/layout";
import ProfileIcon from "../assets/profile-icon";

export type PostType = {
  user: {
    name: string;
    username: string;
  };
  content: string;
};

type Props = {
  body: PostType;
};

export default function Post({ body }: Props) {
  return (
    <Flex border="1px solid #346559" borderRadius="10px" minH="96px">
      <Box
        w="40px"
        h="40px"
        flexShrink={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px 0 10px 0"
        borderWidth="0 1px 1px 0"
        borderColor="#346559"
      >
        <ProfileIcon color="#346559" />
      </Box>
      <Flex flexDir="column" mx="10px" my="8px">
        <Flex alignItems="center" gap={2}>
          <Text fontSize={13} fontWeight="semibold">{body.user.name}</Text>
          <Text fontSize={11} opacity={0.5}>{body.user.username}</Text>
        </Flex>
        <Text fontSize={12} mt="10px">
          {body.content}
        </Text>
      </Flex>
    </Flex>
  );
}
