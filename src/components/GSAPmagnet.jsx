import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPmagnet = React.forwardRef(({ children }, ref) => {
  const localRef = useRef(null);
  const elementRef = ref || localRef;

  useEffect(() => {
    const element = elementRef.current;
    const xTo = gsap.quickTo(element, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);
    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, [elementRef]);

  return React.cloneElement(children, { ref: elementRef });
});

export default GSAPmagnet;
