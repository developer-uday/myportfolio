import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnter = (e) => {
      const link = e.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 8, background: "transparent" });
      } else {
        gsap.to(cursor, { scale: 1.5 });
      }
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1.5 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 p-2.5 bg-transparent border"
    ></div>
  );
};

export default Cursor;
