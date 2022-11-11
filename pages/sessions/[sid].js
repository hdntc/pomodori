import { useRouter } from "next/router"
import { Flex } from "@chakra-ui/react";

const SessionPage = (props) => {
    const router = useRouter();
    const { sid } = router.query;

    return <Flex>
        {sid}
    </Flex>
}

export default SessionPage;