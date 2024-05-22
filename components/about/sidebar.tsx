"use client";
import { useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import terminal from "@/public/terminal.svg";
import bubble from "@/public/bubble.svg";
import console from "@/public/console.svg";
import { DropdownArrowFill } from "../dropdown-arrow";
import mail from "@/public/mail.svg";
import externalLink from "@/public/external-link.svg";
import Link from "next/link";
import { SOCIALS, spotifyPlaylists } from "@/constants";
import PersonalSidebar from "./personal/personal-sidebar";
import ProfSidebar from "./professional/prof-sidebar";
import HobbySidebar from "./hobby/hobby-sidebar";

interface AboutSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setContentTab: (tab: string) => void;
}

const initialTabs = [
  { name: "professional-info", icon: terminal },
  { name: "personal-info", icon: bubble },
  { name: "hobbies", icon: console },
];

const sidebarVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

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

const escapeRealityVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const contactMeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 2,
      staggerChildren: 0.2,
    },
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

const AboutSidebar: NextPage<AboutSidebarProps> = ({
  activeTab,
  setActiveTab,
  setContentTab,
}) => {
  const [isOpen, setIsOpen] = useState<string>("info");

  const toggleOpen = (key: string) => {
    setIsOpen((prev) => (prev === key ? prev : key));
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[310px] border-r border-line h-full flex transition-all duration-300 shrink-0"
    >
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{ initial: {}, animate: {}, exit: {} }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          className="w-[68px] flex flex-col gap-8 items-center border-r border-line h-full py-5 shrink-0"
        >
          {initialTabs.map(({ name, icon }) => (
            <motion.div key={name} variants={listItemVariants}>
              <button
                key={name}
                onClick={() => {
                  setActiveTab(name);
                  toggleOpen("info");
                  setContentTab(
                    name === "professional-info"
                      ? "experience"
                      : name === "hobbies"
                      ? "sports"
                      : "bio"
                  );
                }}
                className={`${
                  activeTab === name ? "opacity-100" : "opacity-40"
                } hover:opacity-60`}
              >
                <Image src={icon} alt={name} className="shrink-0" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex flex-col h-full flex-1">
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center w-full shrink-0"
            onClick={() => toggleOpen("info")}
            key={"info"}
          >
            <DropdownArrowFill isOpen={isOpen === "info"} />
            <p className="text-secondary-400 font-light">{activeTab}</p>
          </button>
          {isOpen === "info" && (
            <AnimatePresence>
              {activeTab === "hobbies" ? (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 1 }}
                >
                  <HobbySidebar setContentTab={setContentTab} />
                </motion.div>
              ) : activeTab === "professional-info" ? (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <ProfSidebar setContentTab={setContentTab} />
                </motion.div>
              ) : (
                <motion.div
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: 1 }}
                >
                  <PersonalSidebar setContentTab={setContentTab} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>

        <motion.div
          variants={escapeRealityVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-y border-line w-full"
            onClick={() => toggleOpen("escapeReality")}
            key={"escapeReality"}
          >
            <DropdownArrowFill isOpen={isOpen === "escapeReality"} />
            <p className="text-secondary-400 font-light">escape-reality</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "escapeReality" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen === "escapeReality" && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{ initial: {}, animate: {}, exit: {} }}
                transition={{ staggerChildren: 0.3 }}
                className={`flex flex-col gap-3 border-b border-line ${
                  isOpen === "escapeReality" ? "pt-5 pb-7 px-4" : "p-0"
                }`}
              >
                {spotifyPlaylists.map(({ name, url }) => (
                  <motion.div key={name} variants={listItemVariants}>
                    <Link
                      href={url}
                      target="_blank"
                      className="flex gap-2 items-center hover:text-secondary-400"
                    >
                      <Image
                        src={externalLink}
                        alt="external_link"
                        className="shrink-0"
                      />
                      {name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactMeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <button
            className="h-10 flex gap-3 px-3 items-center border-b border-line w-full"
            onClick={() => toggleOpen("contacts")}
            key={"contacts"}
          >
            <DropdownArrowFill isOpen={isOpen === "contacts"} />
            <p className="text-secondary-400 font-light">contacts</p>
          </button>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen === "contacts" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col gap-2 transition-all duration-300 ${
              isOpen === "contacts" ? "p-4" : ""
            }`}
          >
            {isOpen === "contacts" && (
              <Link
                href={"mailto:" + SOCIALS.EMAIL}
                className="flex gap-2 items-center hover:text-secondary-400"
              >
                <Image src={mail} alt="mail" className="shrink-0" />
                send mail
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSidebar;
