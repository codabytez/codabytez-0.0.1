import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import orangeFolder from "@/public/orange-folder.svg";
import greenFolder from "@/public/green-folder.svg";
import blueFolder from "@/public/blue-folder.svg";
import { DropdownArrow } from "@/components/dropdown-arrow";
import { motion } from "framer-motion";

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

const ProfSidebar: NextPage<{
  setContentTab: (key: string) => void;
}> = ({ setContentTab }) => {
  const [isOpen, setIsOpen] = useState<string>("experience");

  const toggleIsOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? prev : key));
    setContentTab(key);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{ initial: {}, animate: {}, exit: {} }}
      transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
      className="flex flex-col gap-2 border-t border-line pt-5 pb-7 px-4"
    >
      <motion.div
        className="flex gap-3 items-center"
        key={10}
        variants={listItemVariants}
      >
        <DropdownArrow
          isOpen={isOpen === "experience"}
          toggle={() => toggleIsOpen("experience")}
          key={"experience"}
        />
        <div className="flex gap-2 items-center">
          <Image src={orangeFolder} alt="orange folder" className="shrink-0" />
          <p
            className={`font-light ${
              isOpen === "experience" ? "text-secondary-400" : ""
            }`}
          >
            experience
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-3 items-center"
        key={11}
        variants={listItemVariants}
      >
        <DropdownArrow
          isOpen={isOpen === "hard-skills"}
          toggle={() => toggleIsOpen("hard-skills")}
          key={"hard-skills"}
        />
        <div className="flex gap-2 items-center">
          <Image src={greenFolder} alt="green folder" className="shrink-0" />
          <p
            className={`font-light ${
              isOpen === "hard-skills" ? "text-secondary-400" : ""
            }`}
          >
            hard-skills
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-3 items-center"
        key={12}
        variants={listItemVariants}
      >
        <DropdownArrow
          isOpen={isOpen === "soft-skills"}
          toggle={() => toggleIsOpen("soft-skills")}
          key={"soft-skills"}
        />
        <div className="flex gap-2 items-center">
          <Image src={blueFolder} alt="blue folder" className="shrink-0" />
          <p
            className={`font-light ${
              isOpen === "soft-skills" ? "text-secondary-400" : ""
            }`}
          >
            soft-skills
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfSidebar;
