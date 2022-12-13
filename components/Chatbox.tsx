import { Textarea } from "@chakra-ui/react";
import { KeyboardEvent, useState, useEffect } from "react";
import { WebsocketMessageData, Color, Action, OnMessageData, SendFunction } from "../helper/types";

type ChatboxProps = {
    send: SendFunction
};

export const Chatbox = ({ send }: ChatboxProps) => {
    const [textareaInput, setTextareaInput] = useState<string>("");

    const textareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            const websocketMessage: OnMessageData = {
                action: Action.onMessage,
                content: textareaInput,
                user: { name: "Jerry", userid: 1, color: Color.Red },
                sessionid: 1
            };

            send(websocketMessage);

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