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
        height="2px"
        >
            <SliderFilledTrack
            bgColor="black"
            />
        </SliderTrack>
        <SliderThumb/>
    </Slider>
}

export default Volume;