"use client";
import { motion } from "framer-motion";

const HeroWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 100,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-col md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr] gap-4 mb-12"
    >
      {children}
    </motion.div>
  );
};

export default HeroWrapper;
