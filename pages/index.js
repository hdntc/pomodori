import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Home() {
    return <div>
        Good day
        <NextLink href="/about" legacyBehavior passHref>
            <Link>
                Good day sirs
            </Link>
        </NextLink>
    </div>
}
