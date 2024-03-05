import { Box, Flex, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import ProfileIcon from "../assets/profile-icon";
import SendIcon from "../assets/send-icon";
import { Button } from "@chakra-ui/button";

export type Props = {
  inputProps: any;
  value: string;
  publishDisabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  charLimit?: number;
};

export default function PostInput({
  inputProps,
  publishDisabled,
  onChange,
  value,
  charLimit = 140,
}: Props) {
  const charCount = value.length;

  const charCountText = `${charCount}/${charLimit} characters`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      minH="130px"
      borderRadius="10px"
      border="1px solid #346559"
    >
      <Flex>
        <Box
          w="40px"
          h="40px"
          flexShrink={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="10px 0 10px 0"
          borderWidth="0 1px 1px 0"
          borderColor="#346559"
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
          value={value}
          maxLength={charLimit}
        />
      </Flex>
      <Flex mt="auto" justifyContent="space-between" alignItems="center">
        <Text ml="10px" fontSize={11} opacity={0.7} wordBreak="break-all" whiteSpace="pre-wrap">{charCountText}</Text>
        <Button
          type="submit"
          variant="unstyled"
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
          borderWidth="1px 0 0 1px"
          borderColor="#346559"
          _hover={{
            bg: publishDisabled ? "" : "#d8fff5",
          }}
        >
          <SendIcon color="#346559" />
        </Button>
      </Flex>
    </Box>
  );
}
