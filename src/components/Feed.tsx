import { Box, Flex, Text } from "@chakra-ui/layout";
import Post from "./Post";

type Props = {
  posts: {
    user: {
      name: string;
      username: string;
    };
    content: string;
  }[];
};

export default function Feed({ posts }: Props) {
  return (
    <Flex
      flexDir="column"
      w="100%"
      border="1px solid black"
      borderRadius="10px"
    >
      {posts.map((post, index) => (
        <Post
          body={post}
          options={{ borderBottom: index !== posts.length - 1 }}
        />
      ))}
    </Flex>
  );
}
