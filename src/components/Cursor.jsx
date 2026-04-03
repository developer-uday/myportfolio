import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleHover = (e) => {
      const target = e.target;

      if (target.closest("#cursoreffect")) {
        gsap.to(cursor, {
          scale: 4,
          borderWidth: 0,
          backgroundColor: "white",
        });
      } else if (target.closest("a, button, .view")) {
        gsap.to(cursor, {
          scale: 2.5,
          borderWidth: 0,
          backgroundColor: "white",
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          borderWidth: 1,
          backgroundColor: "transparent",
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999] border border-black mix-blend-difference"
    />
  );
};

export default Cursor;
