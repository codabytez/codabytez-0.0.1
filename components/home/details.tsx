"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import TypingAnimation from "./typing-animation";

const Details: NextPage = () => {
  return (
    <div className="flex flex-col gap-20" suppressHydrationWarning>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <p className="font-medium text-body text-[#E5E9F0]">
          Hello World!! I am
        </p>
        <motion.h1
          className="text-[#E5E9F0] text-headline font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Obinna Chidi
        </motion.h1>
        <motion.h3
          className="text-secondary-300 text-subheadline font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <TypingAnimation text="> Front-end developer" />
        </motion.h3>
      </motion.div>

      <motion.div
        className="flex flex-col gap-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1 }}
        >
          // complete the game to continue
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.2 }}
        >
          // you can also see it on my Github page
        </motion.p>
        <motion.p
          className="font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.4 }}
        >
          <span className="text-secondary-300">const</span>{" "}
          <span className="text-accent-200">githubLink</span>{" "}
          <span className="text-secondary-400">=</span>{" "}
          <span className="text-[#E99287]">
            <TypingAnimation
              className="underline"
              text='"https://github.com/codabytez"'
            />
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Details;
