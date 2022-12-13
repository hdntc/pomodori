import { Flex, Heading, Text } from "@chakra-ui/react";

const Browser = (props) => {
    return <Flex
    height="100%"
    width="50%"
    border="1px #ED3B3B solid"
    borderRadius="32px"
    mt="32px"
    flexDir="column"
    >
        <Flex
        flexDir="row"
        height="50px"
        width="100%"
        borderTopRightRadius="32px"
        borderTopLeftRadius="32px"
        bg="#ED3B3B"
        fontSize="24px"
        color="white"
        pl="32px"
        pr="32px"
        align="center"
        fontWeight="bold"
        textAlign="center"
        >
            <Text
            flex="3"
            >
                Name
            </Text>
            <Text
            flex="1"
            >
                Owner
            </Text>
            <Text
            flex="1"
            >
                # Users
            </Text>
        </Flex>
    </Flex>;
}

export default Browser;