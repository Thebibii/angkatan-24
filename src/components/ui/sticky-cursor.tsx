"use client";

import React, { useEffect, useState } from "react";
import {
  SpringOptions,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const SPRING_OPTIONS: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
};

const SHADOW_SIZE = 50;
const TOP_THRESHOLD = 20;
const SMALL_CURSOR_SIZE = 6;

export default function StickyCursor() {
  const [cursorSize, setCursorSize] = useState(SHADOW_SIZE);
  const [isVisible, setIsVisible] = useState(true);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, SPRING_OPTIONS),
    y: useSpring(mouse.y, SPRING_OPTIONS),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      mouse.x.set(e.clientX);
      mouse.y.set(clientY);

      // Mengubah ukuran cursor jika berada di bagian atas browser
      if (clientY < TOP_THRESHOLD) {
        setIsVisible(true);
        setCursorSize(SMALL_CURSOR_SIZE);
      } else {
        setIsVisible(true);
        setCursorSize(SHADOW_SIZE);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        translateX: "-50%",
        translateY: "-50%",
        display: isVisible ? "block" : "none",
      }}
      className="fixed mix-blend-difference bg-white z-50 rounded-full pointer-events-none"
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
    />
  );
}
