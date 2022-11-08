import { Flex, Text, Img, chakra, Box } from "@chakra-ui/react";

const Feature = ({children, title, step, src, imgOrientation}) => {
    // imgOrientation should be one of ["right", "left"]

    return <Flex
    width="40%"
    flexDir="column"
    mb="128px"
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
                Step {step}
            </Text>
            <Text
            width="250px"
            fontSize="28px"
            fontWeight="bold"
            color="#ED3B3B"
            textAlign="center"
            >
                {title}
            </Text>
            <Text
            width="80px" // this is a hack for the effect im going for
            >
                
            </Text>
        </Flex>
        <Flex
        width="100%"
        height="200px"
        flexDir={imgOrientation == "left" ? "row" : "row-reverse"}
        mt="32px"
        >
            <Box
            width="200px"
            height="200px"
            bgColor="gray"
            flexShrink="0"
            mr={imgOrientation == "left" ? "48px" : "0px"}
            ml={imgOrientation == "left" ? "0px" : "48px"}
            >

            </Box>
            <Text
            margin="auto"
            width="100%"
            textAlign={imgOrientation == "left" ? "right" : "left"}
            verticalAlign="middle"
            fontSize="20px"
            >
                {children}
            </Text>
        </Flex>
    </Flex>
}

export default Feature;