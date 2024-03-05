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
      border="1px solid black"
    >
      <Flex>
        <Box
          w="40px"
          h="40px"
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth="0 1px 1px 0"
          borderColor="black"
          borderStyle="solid"
          borderRadius="0 0 10px 0"
        >
          <ProfileIcon />
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
          bg="unset"
          p={0}
          w="30px"
          h="30px"
          display="flex"
          flexShrink={0}
          alignItems="center"
          justifyContent="center"
          borderWidth="1px 0 0 1px"
          borderColor="black"
          borderStyle="solid"
          borderRadius="10px 0 0 0"
          pointerEvents={publishDisabled ? "none" : "auto"}
          opacity={publishDisabled ? 0.3 : 1}
        >
          <SendIcon />
        </Button>
      </Flex>
    </Box>
  );
}
