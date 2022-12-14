import { Flex, Box, Heading, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SessionDescription } from "../helper/types";

import Navbar from "../components/Navbar";
import Browser from "../components/Browser";
import BrowserItem from "../components/BrowserItem";

export const getStaticProps = async (context) => {
    const data = (await axios.get("https://5d38dibdnk.execute-api.eu-west-2.amazonaws.com/getCurrentSessions"))?.data as SessionDescription[];

    return {
        props: {sessionsData: data}
    };
};

const Browse = ({sessionsData}) => {
    useEffect(() => {
        console.log(sessionsData);
    });

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
            width="80%"
            align="center"
            flexDir="column"
            >
                <Heading
                color="#ED3B3B"
                mt="32px"
                >
                    Find a session
                </Heading>

                <Browser>
                    {sessionsData.map(session => <BrowserItem
                        name={session.name}
                        sessionid={session.sessionid}
                        owner={session.owner}
                        numConnections={session.numConnections}/>
                    )}
                </Browser>
            </Flex>
        </Flex>
    </Box>
};

export default Browse;