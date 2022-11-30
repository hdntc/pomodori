import { Flex, Box, Button, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Text } from "@chakra-ui/react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useState, useEffect } from "react";
import { MutableRefObject } from "react";
import YouTube from "react-youtube";

export interface TimerProps {
    youtubeRef: MutableRefObject<YouTube> // A ref created through useRef pointing to a YouTube component
}

const Timer = ({youtubeRef}: TimerProps) => {
    const [time, setTime] = useState(1200);

    const timeToMMSS = (seconds) => {
        const s = seconds % 60;
        const m = (seconds - s) / 60;

        return m.toString().padStart(2, "0") + ":" + s.toString().padStart(2, "0")
    }

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
            {timeToMMSS(time)}
            <Button
            width="40px"
            height="40px"
            >
                a
            </Button>
        </Flex>
        <Flex
        width="100%"
        height="50px"
        borderBottomRightRadius="32px"
        borderBottomLeftRadius="32px"
        bgColor="white"
        border="1px solid #ED3B3B"
        justify="space-between"
        >
            <Flex
            height="100%"
            width="90px"
            borderRight="1px solid #ED3B3B"
            justify="center"
            align="center"
            fontSize="28px"
            >
                <MdPlayArrow/>
            </Flex>
            <Flex
            height="50px"
            width="100%"
            flexDir="column"
            >
                <Flex
                height="30px"
                width="100%"
                m="5px"
                mb="3px"
                >
                    <Box
                    height="30px"
                    width="30px"
                    borderRadius="full"
                    bgColor="black"
                    mr="5px"
                    >
                    </Box>

                    <Flex
                    flexDir="column"
                    height="30px"
                    width="100%"
                    top="-3px"
                    position="relative"
                    >
                        <Text
                        height="18px"
                        fontSize="17px"
                        top="50px"
                        >
                            Rick Astley - Never Gonna Give You Up 
                        </Text>
                        <Text
                        height="12px"
                        fontSize="11px"
                        >
                            pomodori_lover34
                        </Text>
                    </Flex>
                </Flex>
                <Slider
                min={0}
                max={100}
                height="10px"
                borderRadius="0"
                >
                    <SliderTrack
                    height="10px"
                    borderRadius="0"
                    >
                        <SliderFilledTrack
                        bgColor="#ED3B3B"
                        />
                    </SliderTrack>
                </Slider>
            </Flex>
            <Flex
            height="100%"
            width="90px"
            borderLeft="1px solid #ED3B3B"
            justify="center"
            align="center"
            >
                <Slider
                min={0}
                max={100}
                width="60%"
                borderRadius="0"
                >
                    <SliderTrack
                    height="5px"
                    borderRadius="0"
                    >
                        <SliderFilledTrack
                        bgColor="#ED3B3B"
                        />
                    </SliderTrack>
                    <SliderThumb
                    bgColor="red"
                    width="8px"
                    height="8px"
                    />
                </Slider>
            </Flex>
        </Flex>
    </Box>
}

export default Timer;