import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SessionDescription } from "../helper/types";

import Navbar from "../components/Navbar";
import Browser from "../components/Browser";

const Browse = () => {
    const [ currentSessions, setCurrentSessions ] = useState<SessionDescription[] | null>(null);

    useEffect(() => {
        const getCurrentSessions = async () => {
            await axios.get("https://5d38dibdnk.execute-api.eu-west-2.amazonaws.com/getCurrentSessions").then(response => {
                setCurrentSessions(response.data as SessionDescription[]);
            });
        };

        getCurrentSessions();
    }, []);

    return <Box
    height="100vh"
    width="100vw"
    overflow="hidden"
    >
        <Navbar/>
        <Flex
        height="100%"
        width="100%"
        justify="center"
        >
            <Flex
            height="80%"
            width="70%"
            align="center"
            flexDir="column"
            >
                <Heading
                color="#ED3B3B"
                mt="32px"
                >
                    Find a session
                </Heading>

                <Browser/>
            </Flex>
        </Flex>
    </Box>
};

export default Browse;