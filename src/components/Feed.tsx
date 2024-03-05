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
      gap={5}
    >
      {posts.map((post, index) => (
        <Post
          key={`post-${index}`}
          body={post}
        />
      ))}
    </Flex>
  );
}
