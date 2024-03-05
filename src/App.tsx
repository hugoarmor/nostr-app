import { Flex, Text } from "@chakra-ui/layout";
import PostInput from "./components/post-input";
import Feed from "./components/feed";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PostType } from "./components/post";
import { useNostrClient } from "./hooks/use-nostr-client";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [postInputValue, setPostInputValue] = useState("");

  const [posts, setPosts] = useState<PostType[]>([]);

  const nostrClient = useNostrClient();

  const handleNewPost = (content: any) => {
    const post = JSON.parse(content);

    setPosts((prev) => [post, ...prev]);
    setIsLoading(false);
  };

  const handlePostInputChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostInputValue(target.value);
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);

    const eventContent = JSON.stringify({
      user: {
        name: "User Name",
        username: "@user_name",
      },
      content: data.postContent,
    });

    nostrClient.publish(eventContent);
    setPostInputValue("");
    reset()
  };

  useEffect(() => {
    const uuid = nostrClient.registerHandler(handleNewPost);

    return () => {
      nostrClient.unregisterHandler(uuid);
    };
  });

  return (
    <Flex maxW="500px" flexDir="column" mx="auto" py="40px">
      <Text mb="20px" fontWeight="semibold">
        Hey! What's on your mind?
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PostInput
          value={postInputValue}
          onChange={handlePostInputChange}
          inputProps={{ ...register("postContent") }}
          publishDisabled={isLoading || postInputValue.length === 0}
        />
      </form>
      <Text my="20px" fontWeight="semibold">
        Feed
      </Text>
      {!posts.length ? <Text>No content to show</Text> : <Feed posts={posts} />}
    </Flex>
  );
}

export default App;
