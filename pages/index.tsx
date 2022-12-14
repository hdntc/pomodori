import NextLink from "next/link";
import { Link, Heading, Text, Img, Flex, Button, Box, chakra } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

export const getStaticProps = (context) => {
    return {
        props: {}
    };
}

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
            <Feature
            step={1}
            imgOrientation="left"
            title="Create a session"
            >
                <chakra.span
                color="#00b545"
                fontWeight="bold"
                >
                    Create a session    
                </chakra.span> for your friends to join. You can also make it a single-person session.
            </Feature>
            <Feature
            step={2}
            imgOrientation="right"
            title="Work"
            >
                Each sesson has a <chakra.span
                color="#00b545"
                fontWeight="bold"
                >
                    pomodoro timer
                </chakra.span> shared by all users in the room. 

                <br/><br/>Work until the pomodoro timer is complete.
            </Feature>
            <Feature
            step={3}
            imgOrientation="left"
            title="Relax"
            >
                When the pomodoro timer is finished, you can relax and type messages into the session chat.<br/><br/>

                You can also <chakra.span
                color="#00b545"
                fontWeight="bold"
                >
                    configure the next work session,
                </chakra.span> for example by voting for music that plays for all users.
            </Feature>
            <Feature
            step={4}
            imgOrientation="right"
            title="Repeat"
            >
                After the break is complete, you <chakra.span
                color="#00b545"
                fontWeight="bold"
                >
                    repeat
                </chakra.span> the whole thing again until your work is done.
            </Feature>

        </Flex>
    </Box>
}