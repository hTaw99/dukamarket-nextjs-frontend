"use client";

import { motion } from "framer-motion";

const CartdItemWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 100,
      }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="bg-white group relative flex flex-col p-6 lg:p-4  "
    >
      {[children]}
    </motion.div>
  );
};

export default CartdItemWrapper;
