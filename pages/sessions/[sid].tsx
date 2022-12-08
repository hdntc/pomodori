import { useRouter } from "next/router"
import { useRef } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { ChatProps, Chat } from "../../components/Chat";
import { Message } from "../../components/Message";
import YouTube from "react-youtube";
import useWebSocket, { ReadyState } from "react-use-websocket";

import Timer from "../../components/Timer";
import Navbar from "../../components/Navbar";
import Tracks from "../../components/Tracks";
import Track from "../../components/Track";

const SessionPage = (props) => {
    const router = useRouter();
    const youtube = useRef<null | YouTube>();
    const { sid } = router.query;
    const { sendMessage, lastMessage, readyState } = useWebSocket(
        `wss://94ek4848nf.execute-api.eu-west-2.amazonaws.com/dev`,
        {
            queryParams: {
                sessionid : sid as string,
                userid: 34925,
                username: "jeremythegreat"
            }
        }
    );

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];


    return <Box
    height="100vh"
    width="100vw"
    >
        <Navbar/>
        {connectionStatus === "Open" ? <Flex
        width="100%"
        height="calc(100% - 40px)"
        >
            <Flex
            width="100%"
            height="100%"
            >
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
                    />
                </Box>
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
            </Flex>
            <Chat
            sendMessage={sendMessage}
            messages={[
                <Message 
                content="test" 
                user={{userid: 10, name:"Jeremy", color:"red"}} 
                timestamp={new Date()}/>,

                <Message 
                content="test" 
                user={{userid: 15, name:"jomblesteen", color:"blue"}} 
                timestamp={new Date()}/>
            ]}
            />

        </Flex> : (connectionStatus === "Connecting" ? "Connecting..." : connectionStatus)}
    </Box>;
}

export default SessionPage;