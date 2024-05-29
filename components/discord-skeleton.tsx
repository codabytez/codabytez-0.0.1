import { NextPage } from "next";
import { motion } from "framer-motion";

const DiscordSkeleton: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center w-full p-2 rounded-md gap-2 min-w-[300px] max-w-[500px] bg-[#010c15] animate-pulse"
    >
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0 relative" />
        <div className="flex flex-col">
          <div className="h-4 w-32 bg-gray-700 rounded-md" />
          <div className="h-3 w-20 mt-1 bg-gray-700 rounded-md" />
        </div>
      </div>

      <div className="flex items-center p-2 gap-3 bg-primary-200 rounded-sm">
        <div className="w-14 h-14 bg-gray-700 rounded-sm shrink-0" />
        <div className="flex flex-col">
          <div className="h-4 w-24 bg-gray-700 rounded-md" />
          <div className="h-3 w-16 mt-1 bg-gray-700 rounded-md" />
          <div className="h-3 w-20 mt-1 bg-gray-700 rounded-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default DiscordSkeleton;
