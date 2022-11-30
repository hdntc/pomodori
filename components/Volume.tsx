import { 
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from "@chakra-ui/react";

const Volume = (props) => {
    return <Slider
    defaultValue={40}
    >
        <SliderTrack
        height="4px"
        bgColor="#FFFFFF66"
        >
            <SliderFilledTrack
            bgColor="white"
            height="4px"
            />
        </SliderTrack>
        <SliderThumb/>
    </Slider>
}

export default Volume;