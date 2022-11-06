import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

export default function Home() {
    return <div
    height="100vh"
    width="100vw"
    >
        <Navbar/>
        Good day
        <NextLink href="/about" legacyBehavior passHref>
            <Link>
                Good day sirs
            </Link>
        </NextLink>
    </div>
}
