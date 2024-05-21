import { NextPage } from "next";
import Image from "next/image";
import arrow_down from "@/public/arrow-down-fill.svg";
import markdown from "@/public/markdown.svg";
import DropdownArrow from "@/components/dropdown-arrow";
import { motion } from "framer-motion";

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const listItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const HobbySidebar: NextPage = () => {
  return (
    <motion.div
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="h-10 flex gap-3 px-3 items-center w-full shrink-0">
        <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
        <p className="text-secondary-400 font-light">hobbies</p>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{ initial: {}, animate: {}, exit: {} }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        className="flex flex-col gap-2 border-y border-line pt-5 pb-7 px-4"
      >
        <motion.div
          className="flex gap-3 items-center"
          key={10}
          variants={listItemVariants}
        >
          <DropdownArrow isHidden />
          <div className="flex gap-2 items-center">
            <Image src={markdown} alt="markdown" className="shrink-0" />

            <p className="text-secondary-400 font-light">sports</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={11}
          variants={listItemVariants}
        >
          <DropdownArrow isHidden />
          <div className="flex gap-2 items-center">
            <Image src={markdown} alt="markdown" className="shrink-0" />
            <p className="font-light">music</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={12}
          variants={listItemVariants}
        >
          <DropdownArrow isHidden />
          <div className="flex gap-2 items-center">
            <Image src={markdown} alt="markdown" className="shrink-0" />
            <p className="font-light">movies</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HobbySidebar;
