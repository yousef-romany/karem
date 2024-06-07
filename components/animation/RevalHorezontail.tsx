"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
const RevalHorezontail = ({ children, width }: props) => {
  const elementRef: any = useRef();
  const isInViewd = useInView(elementRef, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (isInViewd) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInViewd]);
  return (
    <div
      ref={elementRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#c6a25a",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
export default RevalHorezontail;
