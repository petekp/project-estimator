import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import { sizing } from "../data/sizing";
import { PhaseOption, SizingOption } from "../data/types";

import { ChakraProvider } from "@chakra-ui/react";
import PhaseSlider from "../components/PhaseSlider";
import EstimationBar from "../components/EstimationBar";

import { calculateTotalEstimate } from "../utils";

const activeColor = "blue.400";
const sliderHeight = 3;

const Index = () => {
  const [estimates, setEstimates] = useState<Record<string, number>>({});
  const [paddingPercentage, setPaddingPercentage] = useState(20);

  const [selectedSizes, setSelectedSizes] = useState<Array<SizingOption>>(
    sizing.map((phase) => ({
      ...phase,
      size: "XS",
      days: phase.options[0].days,
    }))
  );

  const updateSelectedOption = (index: number, selectedOption: PhaseOption) => {
    setSelectedSizes((prevState) =>
      prevState.map((size, i) =>
        i === index ? { ...size, ...selectedOption } : size
      )
    );
  };

  const handlePaddingChange = (value: number) => {
    setPaddingPercentage(value);
  };

  useEffect(() => {
    const newEstimates: Record<string, number> = {};
    for (const key in selectedSizes) {
      const { phase, days } = selectedSizes[key];
      newEstimates[phase] = days;
    }
    setEstimates(newEstimates);
  }, [selectedSizes]);

  return (
    <ChakraProvider>
      <Box mt="50px" mb="80px">
        <Container maxW="600" mb="60px">
          <Box mb="40px">
            <Text fontFamily="mono">Product Design Estimator</Text>
          </Box>
          <VStack
            spacing={6}
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {sizing.map(({ phase, options }, phaseIndex) => (
              <VStack key={phase} alignItems="stretch" w="100%">
                <Text fontSize="md" fontWeight="bold">
                  {phase}
                </Text>

                <Box>
                  <PhaseSlider
                    options={options}
                    selectedIndex={options.findIndex(
                      (o) => o.size === selectedSizes[phaseIndex].size
                    )}
                    onChange={(value) => {
                      const selectedOption = options[value];
                      updateSelectedOption(phaseIndex, selectedOption);
                    }}
                  />
                </Box>
              </VStack>
            ))}
            <VStack alignItems="stretch" w="100%">
              <Box>
                <Text fontWeight="bold">Padding %</Text>
                <Slider
                  defaultValue={20}
                  min={0}
                  max={50}
                  step={5}
                  onChange={(value) => handlePaddingChange(value)}
                >
                  <SliderTrack height={`${sliderHeight}px`}>
                    <SliderFilledTrack bg={activeColor} />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Text fontSize="xs" fontWeight="bold">
                      {paddingPercentage}
                    </Text>
                  </SliderThumb>
                </Slider>
              </Box>
            </VStack>
          </VStack>
        </Container>
        <EstimationBar
          estimate={calculateTotalEstimate({
            estimates,
            paddingPercentage,
          })}
        />
      </Box>
    </ChakraProvider>
  );
};

export default Index;
