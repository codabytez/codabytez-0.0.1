import { NextPage } from "next";
import { motion } from "framer-motion";
import { RocketSvg } from "./rocket-svg";
import { SparklesSvg } from "./sparkle-svg";

const ProjectEmptyState: NextPage = () => {
  return (
    <motion.div
      key="empty-state"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full"
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          },
        }}
        className="mb-8"
      >
        <RocketSvg animationDelay={0.2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-secondary-400 text-4xl font-bold mb-2"
      >
        Blast Off!
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-secondary-100 text-lg mb-8 text-center"
      >
        No projects found in this galaxy.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-4"
      >
        <SparklesSvg animationDelay={1} />
        <SparklesSvg animationDelay={2} />
        <SparklesSvg animationDelay={3} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectEmptyState;
