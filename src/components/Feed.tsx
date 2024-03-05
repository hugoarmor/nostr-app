import { Flex } from "@chakra-ui/layout";
import Post, { PostType } from "./post";

type Props = {
  posts: PostType[];
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
