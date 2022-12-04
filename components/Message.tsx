import { Flex, Text } from "@chakra-ui/react";
import { useIsOverflow } from "../hooks/useIsOverflow";

export interface MessageProps {
    content: string,
    user: { userid: number, name: string, color: string },
    timestamp: Date
};

export const Message = ({ content, user, timestamp }: MessageProps) => {
    const isOverflow = useIsOverflow();

    return <Flex
    height="100px"
    overflowY="hidden"
    flexDir="column"
    p="8px"
    >
        <Flex
        flexDir="row"
        height="20px"
        >
            <Flex
            width="18px"
            height="18px"
            borderRadius="full"
            bgColor="red"
            >

            </Flex>
            {user.name}
        </Flex>
        <Flex
        height="80px"
        >
            {content}
        </Flex>
    </Flex>
};