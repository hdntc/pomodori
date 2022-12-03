import { Flex } from "@chakra-ui/react";

export interface Message {
    content: string,
    user: { userid: number, name: string },
    timestamp: Date
};

export interface ChatProps {
    messages: Message[]
};

export const Chat = ({ messages }: ChatProps) => {
    return <Flex
    width="250px"
    height="100%"
    borderLeft="1px solid #ED3B3B66"
    >

    </Flex>
};