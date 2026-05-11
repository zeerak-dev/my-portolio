"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 70 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 70 });
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!(t.closest("a") || t.closest("button") || t.closest("[data-cursor-hover]")));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  const ringSize = hovering ? 52 : clicking ? 16 : 36;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid #C9A24A",
          backgroundColor: hovering ? "rgba(201,162,74,0.12)" : "transparent",
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, opacity 0.3s ease",
        }}
      />

      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 0 : 5,
          height: hovering ? 0 : 5,
          opacity: visible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
