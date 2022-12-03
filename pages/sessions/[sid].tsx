import { useRouter } from "next/router"
import { useRef } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import YouTube from "react-youtube";

import Timer from "../../components/Timer";
import Navbar from "../../components/Navbar";
import Tracks from "../../components/Tracks";
import Track from "../../components/Track";

const SessionPage = (props) => {
    const router = useRouter();
    const youtube = useRef<null | YouTube>();
    const { sid } = router.query;

    return <Box
    height="100vh"
    width="100vw"
    >
        <Navbar/>
        <Timer youtubeRef={youtube}/>

        <Box
        display="none"
        >
            <YouTube
            videoId="vMAoP7Jlnw4"
            iframeClassName="youtubePlayer"
            ref={youtube}
            opts={{
                width: 800,
                height: 450,
                playerVars: {
                    autoplay: 1
                }
            }}
            onStateChange={(e) => alert(e.data)}
            />
        </Box>
        <Button onClick={() => {
            youtube.current.internalPlayer.loadVideoById("ABeNe3E6c54") // PAcCIkATg7c
        }}>
            aodijasod
        </Button>
        <Tracks
        tracks={[
            <Track
            name="Cat Meow"
            index={1}
            id="dg4dmNvxdu0"
            length={150}
            queuedBy="jeremy"
            />,
            <Track
            name="Cat Meow 2"
            index={2}
            id="dg4dmNvxdu0"
            length={150}
            queuedBy="jeremy"
            />
        ]}
        />
    </Box>
}

export default SessionPage;