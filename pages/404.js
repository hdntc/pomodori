import { Flex, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const FourOhFour = () => {
    const router = useRouter();

    return <Flex
    justify="center"
    align="center"
    width="100vw"
    height="100vh"
    >
        <Flex
        width="800px"
        height="500px"
        flexDir="row"
        boxShadow="md"
        >
            <Flex
            width="300px"
            height="500px"
            align="center"
            justify="center"
            bgColor="red.50"
            borderRight="1px solid"
            borderRightColor="red.500"
            >
                <Heading
                textAlign="center"
                mt="32px"
                color="red.500"
                size="xl"
                as="h1"
                >
                    Whoops
                </Heading>
            </Flex>
            <Flex
            width="500px"
            height="500px"
            align="center"
            justify="space-between"
            flexDir="column"
            p="32px"
            pt="100px"
            pb="100px"
            >
                <Heading as="h2" size="lg">
                    That page doesn't exist.
                </Heading>
                <Button 
                onClick={() => router.push("/")}
                colorScheme="red"
                >
                    Go home
                </Button>
            </Flex>
        </Flex>
    </Flex>
}

export default FourOhFour;