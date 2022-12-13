import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = ({}) => {
    return <Flex
    height="40px"
    bgColor="#ED3B3B"
    position="sticky"
    top="0"
    width="100%"
    zIndex="10000"
    color="white"
    pl="32px"
    pr="32px"
    align="center"
    fontWeight="bold"
    fontSize="24px"
    >
        <Link as={NextLink} href="/" mr="64px">Pomodori</Link>
        <Link as={NextLink} href="/browse" mr="64px">Sessions</Link>
        <Link as={NextLink} href="/profile">Profile</Link>
    </Flex>
}

export default Navbar;