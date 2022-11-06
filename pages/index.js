import NextLink from "next/link";
import { Link, Heading, Text, Img, Flex, Button } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

export default function Home() {
    return <Flex
    height="100vh"
    width="100vw"
    flexDir="column"
    >
        <Navbar/>
        <Flex
        justify="center"
        align="center"
        height="100%"
        >
            <Flex
            width="50%"
            >
                <Flex
                flexDir="column"
                mr="64px"
                >
                    <Heading 
                    fontSize="56px"
                    color="#ED3B3B"
                    mb="16px"
                    >
                        Pomodori
                    </Heading>
                    <Text
                    fontSize="20px"
                    textAlign="left"
                    verticalAlign="center"
                    >
                        The place to to study with your friends. This is where you go to study with your friends, and do things together while still having fun and studying with your friends. 
                    </Text>
                    <Flex
                    height="50px"
                    width="100%"
                    mt="32px"
                    >
                        <Button
                        height="50px"
                        colorScheme="red"
                        border="2px #00FF61 solid"
                        width="150px"
                        fontSize="24px"
                        >
                            Let's go
                        </Button>
                    </Flex>
                </Flex>
                <Img src="../tomatos.png" width="245px" height="316px"/>
            </Flex>
        </Flex>
    </Flex>
}

/*
Good day
<NextLink href="/about" legacyBehavior passHref>
    <Link>
        Good day sirs
    </Link>
</NextLink>
*/