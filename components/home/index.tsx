"use client";
import { NextPage } from "next";
import Details from "./details";
import GameBoard from "./game-board";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100vw" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Details />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100vw" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GameBoard />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
