import { Textarea } from "@chakra-ui/react";

export const Chatbox = ({}) => {
    return <form
    >
        <Textarea
        placeholder="Send a message..."
        resize="none"
        width="100%"
        height="100px"
        border="1px solid #ED3B3B66"
        />
    </form>
}