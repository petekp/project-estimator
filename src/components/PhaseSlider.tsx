import { PhaseOption } from "../data/types";

import React from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Text,
} from "@chakra-ui/react";

type PhaseSliderProps = {
  options: PhaseOption[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

const activeColor = "blue.400";
const defaultColor = "gray.300";
const sliderHeight = 3;
const markHeight = 8;
const markWidth = 8;

const PhaseSlider: React.FC<PhaseSliderProps> = ({
  options,
  selectedIndex,
  onChange,
}) => {
  return (
    <Box>
      <Slider
        min={0}
        max={options.length - 1}
        step={1}
        defaultValue={selectedIndex}
        onChange={onChange}
      >
        <SliderTrack bg={defaultColor} height={`${sliderHeight}px`}>
          <SliderFilledTrack bg={activeColor} />
        </SliderTrack>
        {options.map((_, index) => {
          const markColor = index <= selectedIndex ? activeColor : defaultColor;
          return (
            <SliderMark
              key={index}
              value={index}
              bg={markColor}
              h={`${markHeight}px`}
              w={`${markWidth}px`}
              mt={`${(markHeight / 2) * -1}px`}
              borderRadius="50%"
            />
          );
        })}
        <SliderThumb boxSize={6}>
          <Text fontSize="xs" fontWeight="bold">
            {options[selectedIndex].size}
          </Text>
        </SliderThumb>
      </Slider>
    </Box>
  );
};

export default PhaseSlider;
