import { Flex } from "@chakra-ui/react";
import { Chatbox } from "./Chatbox";
import { Message } from "./Message";
import { SendMessage } from "react-use-websocket";

export interface ChatProps {
    messages: JSX.Element[],
    sendMessage: SendMessage
};

export const Chat = ({ messages, sendMessage }: ChatProps) => {
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
            {messages}
        </Flex>
        <Chatbox
        sendMessage={sendMessage}
        />
    </Flex>
};