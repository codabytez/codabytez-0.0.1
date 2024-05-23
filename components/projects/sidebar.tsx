"use client";
import { NextPage } from "next";
import Image from "next/image";
import CustomCheckbox from "../checkbox";
import react from "@/public/react.svg";
import html from "@/public/html.svg";
import css from "@/public/css.svg";
import vue from "@/public/vue.svg";
import angular from "@/public/angular.svg";
import gatsby from "@/public/gatsby.svg";
import flutter from "@/public/flutter.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { DropdownArrowFill } from "../dropdown-arrow";

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

const projectTypes = [
  { name: "React", icon: react },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Vue", icon: vue },
  { name: "Angular", icon: angular },
  { name: "Gatsby", icon: gatsby },
  { name: "Flutter", icon: flutter },
];

const ProjectSidebar: NextPage<{
  handleSelect: (name: string) => void;
  selectedTech: string[];
}> = ({ handleSelect, selectedTech }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <motion.div className="w-full lg:w-[310px] lg:border-r lg:border-line lg:h-full flex shrink-0">
      <div className="flex flex-col h-full flex-1">
        <button
          className="h-10 flex gap-3 px-3 items-center w-full shrink-0 bg-line hover:opacity-60 lg:bg-transparent"
          onClick={toggleIsOpen}
        >
          <DropdownArrowFill isOpen={isOpen} />
          <p className="text-secondary-400 font-light">projects</p>
        </button>

        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{ initial: {}, animate: {}, exit: {} }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          className={`flex flex-col gap-4 border-t border-line ${
            isOpen ? "pt-5 pb-7 px-4" : ""
          }`}
        >
          {isOpen &&
            projectTypes.map(({ name, icon }) => (
              <motion.div
                variants={listItemVariants}
                key={name}
                className="flex gap-6 items-center"
              >
                <CustomCheckbox onChange={() => handleSelect(name)} />
                <div
                  className={`flex gap-2 items-center ${
                    selectedTech.includes(name) ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <Image src={icon} alt={name} className="shrink-0" />
                  <p
                    className={
                      selectedTech.includes(name) ? "text-secondary-400" : ""
                    }
                  >
                    {name}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSidebar;
