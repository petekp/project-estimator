import React, { forwardRef, useEffect, useState, useRef } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import useIntersection from "../hooks/useIntersection";

type EstimationBarProps = {
  estimate: string;
  forwardedRef?: React.Ref<HTMLDivElement>;
};

const InnerEstimationBar = forwardRef<HTMLDivElement, EstimationBarProps>(
  ({ estimate }, forwardedRef) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isIntersecting] = useIntersection(ref, 1);

    const [stickyBottom, setStickyBottom] = useState(0);

    useEffect(() => {
      setStickyBottom(isIntersecting ? 0 : -1);
    }, [isIntersecting]);

    return (
      <Box
        ref={forwardedRef}
        position="sticky"
        bottom={stickyBottom}
        bg="rgba(255, 255, 255, 0.58)"
        backdropFilter="blur(10px)"
        p={4}
        zIndex={1}
        borderTop="1px"
        borderTopColor="gray.200"
      >
        <Container
          maxW="600"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontFamily="mono" fontSize="lg" mr={2} pr={4}>
            Estimate
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {estimate}
          </Text>
        </Container>
      </Box>
    );
  }
);

InnerEstimationBar.displayName = "InnerEstimationBar";

const EstimationBar = forwardRef<HTMLDivElement, EstimationBarProps>(
  (props, ref) => {
    return <InnerEstimationBar {...props} forwardedRef={ref} />;
  }
);

EstimationBar.displayName = "EstimationBar";

export default EstimationBar;
