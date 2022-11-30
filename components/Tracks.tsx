import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Flex, Text, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark} from "@chakra-ui/react";

import Volume from "./Volume"
import Track, { TrackProps } from "./Track"

export interface TracksProps {
    tracks: React.FC<TrackProps>[]
}

const Tracks = ({tracks}: TracksProps) => {
    return <Flex
    width="500px"
    height="500px"
    borderRadius="32px"
    flexDir="column"
    border="1px #ED3B3B solid"
    >
        <Flex
        height="100px"
        width="100%"
        flexDir="column"
        bgColor="#ED3B3B"
        borderTopLeftRadius="32px"
        borderTopRightRadius="32px"
        >
            <Flex
            flexDir="row"
            height="50px"
            width="calc(100% - 32px)"
            mr="16px"
            ml="16px"
            borderBottom="1px #FFFFFF66 solid"
            justify="space-between"
            align="center"
            color="white"
            fontSize="32px"
            >
                <AiFillDelete/>
                <Text
                fontWeight="bold"
                >
                    Tracks
                </Text>
                <IoIosAddCircle/>
            </Flex>
            <Flex
            flexDir="row"
            height="50px"
            width="calc(100% - 32px)"
            mr="16px"
            ml="16px"
            justify="space-between"
            align="center"
            color="white"
            fontSize="32px"
            >
                <Box
                flexShrink="0"
                width="80px"
                >
                    <FaPlay
                    />
                </Box>
                <Flex
                height="44px"
                width="100%"
                bgColor="white"
                ml="16px"
                mr="16px"
                borderRadius="8px"
                flexDir="column"
                border="1px white solid"
                >
                    <Flex
                    height="24px"
                    width="100%"
                    color="black"
                    fontSize="16px"
                    ml="8px"
                    mr="8px"
                    flexShrink="0"
                    >
                        <Flex
                        borderRadius="full"
                        height="24px"
                        width="24px"
                        bg="black"
                        mr="4px"
                        >
                        </Flex>
                        Never Gonna Give YOu Up
                    </Flex>
                    <Flex
                    height="100%"
                    width="100%"
                    >

                    </Flex>
                    <Slider
                    height="8px"
                    flexShrink="0"
                    >
                        <SliderTrack
                        height="8px"
                        borderBottomRightRadius="8px"
                        borderBottomLeftRadius="8px"
                        >
                            <SliderFilledTrack
                            bgColor="#ED3B3B"
                            />
                        </SliderTrack>
                    </Slider>
                </Flex>
                <Flex
                flexShrink="0"
                width="80px"
                justify="center"
                >
                    <Volume/>
                </Flex>
            </Flex>
        </Flex>
        <> 
            {tracks}
        </>
    </Flex>
}

export default Tracks;