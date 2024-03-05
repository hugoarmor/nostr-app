import { Box, Flex } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import ProfileIcon from "../assets/profile-icon";
import SendIcon from "../assets/send-icon";
import { Button } from "@chakra-ui/button";

export type Props = {
  inputProps: any;
  publishDisabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export default function PostInput({
  inputProps,
  publishDisabled,
  onChange,
}: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      minH="130px"
      borderRadius="10px"
      boxShadow="0px 5px 30px -15px rgba(0,0,0,0.50)"
    >
      <Flex>
        <Box
          w="40px"
          h="40px"
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="#F5F5F5"
          borderRadius="10px 0 10px 0"
        >
          <ProfileIcon color="#346559" />
        </Box>
        <Textarea
          {...inputProps}
          onChange={onChange}
          placeholder="Type something..."
          mx="10px"
          fontSize={12}
          variant="unstyled"
          border="0px solid black"
          resize="none"
        />
      </Flex>
      <Flex mt="auto" justifyContent="flex-end">
        <Button
          type="submit"
          variant="unstyled"
          bg="#6EFFDC"
          p={0}
          w="30px"
          h="30px"
          display="flex"
          flexShrink={0}
          alignItems="center"
          justifyContent="center"
          borderRadius="10px 0 10px 0"
          pointerEvents={publishDisabled ? "none" : "auto"}
          opacity={publishDisabled ? 0.3 : 1}
        >
          <SendIcon color="#346559" />
        </Button>
      </Flex>
    </Box>
  );
}
