import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";

import Volume from "./Volume.js"

const Tracks = (props) => {
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
                <FaPlay/>
                <Volume/>
            </Flex>
        </Flex>
        
    </Flex>
}

export default Tracks;