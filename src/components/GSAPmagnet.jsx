import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPmagnet = React.forwardRef(({ children }, ref) => {
  const localRef = useRef(null);
  const elementRef = ref || localRef;

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(element, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      xTo(x * 0.3); // reduce intensity (more natural)
      yTo(y * 0.3);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, [elementRef]);

  return React.cloneElement(children, { ref: elementRef });
});

export default GSAPmagnet;