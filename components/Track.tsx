import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import secondsToMMSS from "../helper/secondsToMMSS";

export interface TrackProps {
    name: string,     // Title of track on YouTube
    id: string,       // YouTube video id
    index: number,    // Index of the track in the queue (0 for current song, 1 for next song)
    length: number,   // Length of the track in seconds
    queuedBy: string  // username of the user who queued the video

}

const Track: React.FC<TrackProps> = ({name, id, index, length, queuedBy}: TrackProps) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

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
        <Flex
        flex="0.5"
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
        color="#ED3B3B"
        >
            <Text
            width="100%"
            textAlign="center"
            >
                {index}
            </Text>
        </Flex>
        <Flex
        flex="3"
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
            textAlign="left"
            ml="16px"
            mr="16px"
            >
                {name}
            </Text>
        </Flex>
        <Flex
        flex="0.6"
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
            >
                {secondsToMMSS(length)}
            </Text>
        </Flex>
        <Flex
        flex="0.5"
        align="center"
        justify="center"
        height="100%"
        fontSize="22px"
        color="#ED3B3B"
        >
            <GiHamburgerMenu/>
        </Flex>
    </Flex>
}

Track.propTypes = {
    name: PropTypes.string.isRequired,     
    id: PropTypes.string.isRequired,       
    index: PropTypes.number.isRequired,    
    length: PropTypes.number.isRequired,   
    queuedBy: PropTypes.string.isRequired  
}

export default Track;