import { Flex } from "@chakra-ui/react";
import { Chatbox } from "./Chatbox";
import { Message } from "./Message";

export interface ChatProps {
    messages: ReturnType<typeof Message>[]
};

export const Chat = ({ messages }: ChatProps) => {
    return <Flex
    width="300px"
    height="100%"
    borderLeft="1px solid #ED3B3B66"
    flexDir="column"
    flexShrink="0"
    >
        <Flex
        flexDir="column"
        height="calc(100% - 100px)"
        >

        </Flex>
        <Chatbox/>
    </Flex>
};