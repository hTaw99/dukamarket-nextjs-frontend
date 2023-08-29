"use client";
import { motion } from "framer-motion";

const NewArrivalWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 100,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="mb-12 border-4 bg-red-500  border-red-500 rounded-md text-white flex flex-col lg:grid lg:grid-cols-[0.5fr_2fr]"
    >
      {[children]}
    </motion.div>
  );
};

export default NewArrivalWrapper;
