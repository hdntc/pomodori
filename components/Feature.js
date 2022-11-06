import { Flex, Text, Img, chakra, box } from "@chakra-ui/react";

const Feature = ({children, title, step, src, imgLocation}) => {
    // imgLocation should be one of ["right", "left"]

    return <Flex
    width="40%"
    flexDir="column"
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
        mt="32px"
        >
            <Box
            width="200px"
            height="200px"
            bgColor="gray"
            flexShrink="0"
            mr="32px"
            >

            </Box>
            <Text
            height="200px"
            width="100%"
            textAlign="left"
            verticalAlign="middle"
            fontSize="20px"
            >
                {children}
            </Text>
        </Flex>
    </Flex>
}