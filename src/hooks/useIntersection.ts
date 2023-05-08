import { useState, useEffect, useRef } from "react";

const useIntersection = (
  forwardedRef: React.RefObject<HTMLDivElement>,
  threshold: number = 1
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refElement = forwardedRef.current || innerRef.current;

    if (!refElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(refElement);

    return () => {
      observer.unobserve(refElement);
    };
  }, [threshold, forwardedRef]);

  return [isIntersecting, innerRef];
};

export default useIntersection;
