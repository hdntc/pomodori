import { Flex } from "@chakra-ui/react";

interface BrowserItemProps {
    name: string,
    owner: string,
    numConnections: number;
};

const BrowserItem = ({name, owner, numConnections} : BrowserItemProps) => {
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
    >

    </Flex>
}

export default BrowserItem;