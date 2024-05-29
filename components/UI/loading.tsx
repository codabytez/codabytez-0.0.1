import { NextPage } from "next";
import { motion } from "framer-motion";

export const LoadingAnimation: NextPage = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      className="mb-8"
    >
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 text-accent-100"
      >
        <motion.path
          d="M64 120C93.1274 120 116 97.1274 116 68C116 38.8726 93.1274 16 64 16C34.8726 16 12 38.8726 12 68C12 97.1274 34.8726 120 64 120Z"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.path
          d="M12 68L64 68L64 120"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2.5,
          }}
        />
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="text-secondary-400 text-4xl font-bold mb-4"
    >
      Buckle Up!
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex gap-4"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 0.8,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          transition: {
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="w-4 h-4 bg-gradient-to-r from-accent-200 to-accent-400 rounded-full"
      />
    </motion.div>
  </motion.div>
);
