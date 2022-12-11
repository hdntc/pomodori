import { Textarea } from "@chakra-ui/react";
import { SendMessage } from "react-use-websocket";
import { KeyboardEvent, useState, useEffect } from "react";

type ChatboxProps = {
    sendMessage: SendMessage
};

export const Chatbox = ({ sendMessage }: ChatboxProps) => {
    const [textareaInput, setTextareaInput] = useState<string>("");

    const textareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            sendMessage(JSON.stringify({
                action: "onMessage",
                content: textareaInput,
                user: {
                    name: "Jerry",
                    userid: 1,
                    color: "red"
                },
                sessionid: 1
            }));

            setTextareaInput("");
        }
    };

    return <form
    >
        <Textarea
        placeholder="Send a message..."
        resize="none"
        width="100%"
        height="100px"
        border="1px solid #ED3B3B66"
        value={textareaInput}
        onChange={e => setTextareaInput(e.target.value)}
        onKeyDown={textareaKeyDown}
        />
    </form>
}