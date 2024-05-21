import { NextPage } from "next";
import Image from "next/image";
import arrow_down from "@/public/arrow-down-fill.svg";
import orange_folder from "@/public/orange-folder.svg";
import green_folder from "@/public/green-folder.svg";
import blue_folder from "@/public/blue-folder.svg";
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

const PersonalSidebar: NextPage = () => {
  return (
    <motion.div
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="h-10 flex gap-3 px-3 items-center w-full shrink-0">
        <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
        <p className="text-secondary-400 font-light">personal-info</p>
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
          key={1}
          variants={listItemVariants}
        >
          <DropdownArrow />
          <div className="flex gap-2 items-center">
            <Image
              src={orange_folder}
              alt="orange_folder"
              className="shrink-0"
            />
            <p className="text-secondary-400 font-light">bio</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={2}
          variants={listItemVariants}
        >
          <DropdownArrow />
          <div className="flex gap-2 items-center">
            <Image src={green_folder} alt="green_folder" className="shrink-0" />
            <p className="font-light">interests</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={3}
          variants={listItemVariants}
        >
          <DropdownArrow isOpen />
          <div className="flex gap-2 items-center">
            <Image src={blue_folder} alt="blue_folder" className="shrink-0" />
            <p className="font-light">education</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={4}
          variants={listItemVariants}
        >
          <DropdownArrow isHidden />
          <div className="flex gap-2 items-center">
            <Image src={markdown} alt="markdown" className="shrink-0" />
            <p className="font-light">high-school</p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 items-center"
          key={5}
          variants={listItemVariants}
        >
          <DropdownArrow isHidden />
          <div className="flex gap-2 items-center">
            <Image src={markdown} alt="markdown" className="shrink-0" />
            <p className="font-light">university</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalSidebar;
