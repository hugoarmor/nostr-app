import { Flex, Text } from "@chakra-ui/layout";
import PostInput from "./components/PostInput";
import Feed from "./components/Feed";

function App() {
  const posts = [
    {
      user: {
        name: "User Name",
        username: "@user_name",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, libero et vestibulum auctor, libero et vestibulum consectetur, libero et vestibulum",
    },
    {
      user: {
        name: "User Name",
        username: "@user_name",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, libero et vestibulum auctor, libero et vestibulum consectetur, libero et vestibulum",
    },
    {
      user: {
        name: "User Name",
        username: "@user_name",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, libero et vestibulum auctor, libero et vestibulum consectetur, libero et vestibulum",
    },
  ];

  return (
    <Flex maxW="500px" flexDir="column" mx="auto">
      <PostInput />
      <Text my="20px" fontWeight="semibold">
        Feed
      </Text>
      <Feed posts={posts} />
    </Flex>
  );
}

export default App;
