import { useRouter } from "next/router"
import { useRef, useEffect, useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { ChatProps, Chat } from "../../components/Chat";
import { Message, MessageProps } from "../../components/Message";
import YouTube from "react-youtube";
import useWebSocket, { ReadyState, SendMessage } from "react-use-websocket";
import axios from "axios";

import Timer from "../../components/Timer";
import Navbar from "../../components/Navbar";
import Tracks from "../../components/Tracks";
import Track from "../../components/Track";

import { Action, SendFunction, WebsocketMessageData } from "../../helper/types";

const SessionPage = (props) => {
    const router = useRouter();
    const youtube = useRef<null | YouTube>();
    const [messageHistory, setMessageHistory] = useState<MessageProps[]>([]);
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

    // Same as sendMessage from useWebSocket hook but w/ specific behaviour based on action
    // To be used by downstream components
    const send: SendFunction = (websocketData : WebsocketMessageData) => {
        sendMessage(JSON.stringify(websocketData));

        switch (websocketData.action) { // Using tagged union types
            case Action.onMessage:
                setMessageHistory(oldHistory => [...oldHistory, 
                    {user: websocketData.user, content: websocketData.content, timestamp: new Date()}
                ]);
        }
    };

    useEffect(() => {
        if(lastMessage !== null && lastMessage?.data !== "") {
            let data = JSON.parse(lastMessage.data);
            setMessageHistory(oldHistory => [...oldHistory, {user: data.user, content: data.content, timestamp: data.timestamp}]);
        }
    }, [lastMessage]);

    useEffect(() => {
        if(messageHistory.length !== 0) {
            console.log(messageHistory);
        }
    }, [messageHistory]);

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
                {lastMessage?.data}
                <Box
                display="none"
                >
                    <YouTube
                    videoId="mGc0Z7E0U1I"
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
            send={send}
            messages={messageHistory.map(messageProps => <Message
            content={messageProps.content}
            user={messageProps.user}
            timestamp={messageProps.timestamp}
            />)}
            />

        </Flex> : (connectionStatus === "Connecting" ? "Connecting..." : connectionStatus)}
    </Box>;
}

export default SessionPage;