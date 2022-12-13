import { Flex, Box } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SessionDescription } from "../helper/types";

const Browse = () => {
    const [ currentSessions, setCurrentSessions ] = useState<SessionDescription[] | null>(null);

    useEffect(() => {
        const getCurrentSessions = async () => {
            await axios.get("https://5d38dibdnk.execute-api.eu-west-2.amazonaws.com/getCurrentSessions").then(data => {
                console.log(data);
            });
        };

        getCurrentSessions();
    }, []);

    return <Box
    height="100vh"
    width="100vw"
    >

    </Box>
};

export default Browse;