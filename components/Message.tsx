import { Flex, Text } from "@chakra-ui/react";

export interface MessageProps {
    content: string,
    user: { userid: number, name: string },
    timestamp: Date
};

const Message = ({ content, user, timestamp }: MessageProps) => {
    return <Flex
    height="100px"
    >
        
    </Flex>
};