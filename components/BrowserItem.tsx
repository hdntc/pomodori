import { Flex, Text, UseNumberInputProps } from "@chakra-ui/react";

interface BrowserItemProps {
    name: string,
    owner: string,
    numConnections: number,
    sessionid: number
};

const BrowserItem = ({name, owner, numConnections, sessionid} : BrowserItemProps) => {
    return <Flex
    height="50px"
    width="100%"
    cursor="pointer"
    justify="center"
    transitionProperty="background-color"
    transitionDuration="75ms"
    transitionTimingFunction="linear"
    _hover={{
        bgColor: "#ED3B3B33"
    }}
    pl="32px"
    pr="32px"
    fontWeight="bold"
    >
        <Flex
        flex="2"
        align="center"
        justify="center"
        height="100%"
        position="relative"
        _after={{
            height: "70%",
            width: "1px",
            content: `""`,
            bgColor: "#ED3B3B66"
        }}
        fontSize="20px"
        fontWeight="bold"
        >
            <Text
            width="100%"
            textAlign="center"
            >
                {name}
            </Text>
        </Flex>
        <Flex
        flex="1"
        align="center"
        justify="center"
        height="100%"
        position="relative"
        _after={{
            height: "70%",
            width: "1px",
            content: `""`,
            bgColor: "#ED3B3B66"
        }}
        >
            <Text
            width="100%"
            textAlign="center"
            ml="16px"
            mr="16px"
            >
                {owner}
            </Text>
        </Flex>
        <Flex
        flex="1"
        align="center"
        justify="center"
        height="100%"
        position="relative"
        >
            <Text
            width="100%"
            textAlign="center"
            >
                {numConnections} users online
            </Text>
        </Flex>
        
    </Flex>
}

export default BrowserItem;