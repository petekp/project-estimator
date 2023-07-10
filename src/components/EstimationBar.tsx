import React, { forwardRef, useEffect, useState, useRef } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import useIntersection from "../hooks/useIntersection";

type EstimationBarProps = {
  estimate: string;
};

const EstimationBar = forwardRef<HTMLDivElement, EstimationBarProps>(
  ({ estimate }, ref) => {
    const innerRef = useRef<HTMLDivElement | null>(null);
    const combinedRef = (ref || innerRef) as React.RefObject<HTMLDivElement>;
    const [isIntersecting] = useIntersection(combinedRef, 1);
    const [stickyBottom, setStickyBottom] = useState(0);

    useEffect(() => {
      setStickyBottom(isIntersecting ? 0 : -1);
    }, [isIntersecting]);

    return (
      <Box
        ref={combinedRef}
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
            Work weeks required
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {estimate}
          </Text>
        </Container>
      </Box>
    );
  }
);

EstimationBar.displayName = "EstimationBar";

export default EstimationBar;
