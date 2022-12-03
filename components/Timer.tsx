import { Flex, Box, Button, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Text } from "@chakra-ui/react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useState, useEffect } from "react";
import { MutableRefObject } from "react";
import YouTube from "react-youtube";
import secondsToMMSS from "../helper/secondsToMMSS";

export interface TimerProps {
    youtubeRef: MutableRefObject<YouTube> // A ref created through useRef pointing to a YouTube component
}

const Timer = ({youtubeRef}: TimerProps) => {
    const [time, setTime] = useState(1200);

    return <Box
    height="250px"
    width="500px"
    borderRadius="32px"
    bgColor="#ED3B3B"
    flexDir="column"
    >
        <Flex
        width="100%"
        height="200px"
        fontSize="55px"
        fontWeight="bold"
        color="white"
        justify="center"
        align="center"
        >
            <Button
            width="32px"
            height="32px"
            size="sm"
            color="black"
            >
                a
            </Button>
            {secondsToMMSS(time)}
            <Button
            width="40px"
            height="40px"
            >
                a
            </Button>
        </Flex>
    </Box>
}

export default Timer;