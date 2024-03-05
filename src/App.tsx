import { Flex, Text } from "@chakra-ui/layout";
import PostInput from "./components/post-input";
import Feed from "./components/feed";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PostType } from "./components/post";
import { useNostrClient } from "./hooks/use-nostr-client";

function App() {
  const { register, handleSubmit } = useForm();
  const [isPublishDisabled, setIsPublishDisabled] = useState(true);

  const [posts, setPosts] = useState<PostType[]>([]);

  const nostrClient = useNostrClient();

  const handleNewPost = (content: any) => {
    const post = JSON.parse(content);

    setPosts((prev) => [post, ...prev]);
  };

  useEffect(() => {
    const uuid = nostrClient.registerHandler(handleNewPost);

    return () => {
      nostrClient.unregisterHandler(uuid);
    };
  });

  const onSubmit = (data: any) => {
    const eventContent = JSON.stringify({
      user: {
        name: "User Name",
        username: "@user_name",
      },
      content: data.postContent,
    });

    nostrClient.publish(eventContent);
  };

  const handlePostInputChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      {!posts.length ? <Text>No content to show</Text> : <Feed posts={posts} />}
    </Flex>
  );
}

export default App;
