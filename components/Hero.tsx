import { Flex, Heading, Text, Button, Img } from "@chakra-ui/react"

const Hero = ({}) => {
    return <Flex // hero
    justify="center"
    align="center"
    height="100%"
    >
        <Flex
        width="50%"
        >
            <Flex
            flexDir="column"
            mr="64px"
            >
                <Heading 
                fontSize="56px"
                color="#ED3B3B"
                mb="16px"
                >
                    Pomodori
                </Heading>
                <Text
                fontSize="20px"
                textAlign="left"
                verticalAlign="center"
                >
                    The place to to study with your friends. This is where you go to study with your friends, and do things together while still having fun and studying with your friends. 
                </Text>
                <Flex
                height="50px"
                width="100%"
                mt="32px"
                >
                    <Button
                    height="50px"
                    colorScheme="red"
                    border="2px #00b545 solid"
                    width="150px"
                    fontSize="24px"
                    boxShadow="xl"
                    >
                        Let's go
                    </Button>
                </Flex>
            </Flex>
            <Img src="../tomatos.png" width="245px" height="316px"/>
        </Flex>
    </Flex>
}

export default Hero