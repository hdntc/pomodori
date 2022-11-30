import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export interface TrackProps {
    name: string,     // Title of track on YouTube
    id: string,       // YouTube video id
    index: number,    // Index of the track in the queue (0 for current song, 1 for next song)
    length: number,   // Length of the track in seconds
    queuedBy: string  // username of the user who queued the video

}

const Track: React.FC = ({name, id, index, length, queuedBy}: TrackProps) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return <Flex
    height="50px"
    width="100%"
    cursor="pointer"
    borderBottom="1px #ED3B3B solid"
    >

    </Flex>
}

Track.propTypes = {
    name: PropTypes.string.isRequired,     
    id: PropTypes.string.isRequired,       
    index: PropTypes.number.isRequired,    
    length: PropTypes.number.isRequired,   
    queuedBy: PropTypes.string.isRequired  
}

export default Track;