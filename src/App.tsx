import { Flex, Text } from "@chakra-ui/layout";
import PostInput from "./components/PostInput";
import Feed from "./components/Feed";
import { Form, useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Flex maxW="500px" flexDir="column" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PostInput inputProps={{ ...register("postContent") }} />
      </form>
      <Text my="20px" fontWeight="semibold">
        Feed
      </Text>
      <Feed posts={posts} />
    </Flex>
  );
}

export default App;
