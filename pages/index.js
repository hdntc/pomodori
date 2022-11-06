import NextLink from "next/link";
import { Link, Heading, Text, Img, Flex, Button, Box, chakra } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
    return <Box
    height="100vh"
    width="100vw"
    overflowY="scroll"
    >
        <Navbar/>
        <Hero/>
        <Heading
        fontSize="40px"
        color="#ED3B3B"
        mb="16px"
        width="100%"
        textAlign="center"
        >
            How it works
        </Heading>
        <Flex
        width="100%"
        flexDir="column"
        align="center"
        mt="64px"
        >
            <Flex
            width="40%"
            flexDir="column"
            >
                <Flex
                justify="space-between"
                align="center"
                height="40px"
                >
                    <Text 
                    width="80px"
                    fontSize="20px"
                    fontWeight="bold"
                    >
                        Step 1
                    </Text>
                    <Text
                    width="250px"
                    fontSize="28px"
                    fontWeight="bold"
                    color="#ED3B3B"
                    textAlign="center"
                    >
                        Create a session
                    </Text>
                    <Text
                    width="80px" // this is a hack for the effect im going for
                    >
                        
                    </Text>
                </Flex>
                <Flex
                width="100%"
                height="200px"
                mt="32px"
                >
                    <Box
                    width="200px"
                    height="200px"
                    bgColor="gray"
                    flexShrink="0"
                    mr="32px"
                    >

                    </Box>
                    <Text
                    height="200px"
                    width="100%"
                    textAlign="left"
                    verticalAlign="middle"
                    fontSize="20px"
                    >
                        <chakra.span
                        color="#00b545"
                        fontWeight="bold"
                        >
                            Create a session    
                        </chakra.span> for your friends to join. You can also make it a single-person session.
                    </Text>
                </Flex>
            </Flex>

        </Flex>
    </Box>
}

/*
Good day
<NextLink href="/about" legacyBehavior passHref>
    <Link>
        Good day sirs
    </Link>
</NextLink>
*/