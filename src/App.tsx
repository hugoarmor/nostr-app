import { Flex, Text } from "@chakra-ui/layout";
import PostInput from "./components/PostInput";
import Feed from "./components/Feed";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [isPublishDisabled, setIsPublishDisabled] = useState(true);

  const [posts, setPosts] = useState([
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
  ]);

  const onSubmit = (data: any) => {
    setPosts((prev) => [
      {
        user: {
          name: "User Name",
          username: "@user_name",
        },
        content: data.postContent,
      },
      ...prev,
    ]);
  };

  const handlePostInputChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsPublishDisabled(target.value.length === 0);
  };

  return (
    <Flex maxW="500px" flexDir="column" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PostInput
          onChange={handlePostInputChange}
          inputProps={{ ...register("postContent") }}
          publishDisabled={isPublishDisabled}
        />
      </form>
      <Text my="20px" fontWeight="semibold">
        Feed
      </Text>
      <Feed posts={posts} />
    </Flex>
  );
}

export default App;
