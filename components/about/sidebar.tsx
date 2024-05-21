"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import terminal from "@/public/terminal.svg";
import bubble from "@/public/bubble.svg";
import console from "@/public/console.svg";
import arrow_down from "@/public/arrow-down-fill.svg";
import orange_folder from "@/public/orange-folder.svg";
import green_folder from "@/public/green-folder.svg";
import blue_folder from "@/public/blue-folder.svg";
import markdown from "@/public/markdown.svg";
import DropdownArrow from "../dropdown-arrow";
import mail from "@/public/mail.svg";
import external_link from "@/public/external-link.svg";
import Link from "next/link";
import { SOCIALS, spotify_playlists } from "@/constants";
import PersonalSidebar from "./personal/personal-sidebar";
import ProfSidebar from "./professional/prof-sidebar";
import HobbySidebar from "./hobby/hobby-sidebar";

interface AboutSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
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
}) => {
  return (
    <motion.div
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[310px] border-r border-line h-full flex transition-all duration-300"
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
                onClick={() => setActiveTab(name)}
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
        <AnimatePresence>
          {activeTab === "hobbies" ? (
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 1 }}
            >
              <HobbySidebar />
            </motion.div>
          ) : activeTab === "professional-info" ? (
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProfSidebar />
            </motion.div>
          ) : (
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 1 }}
            >
              <PersonalSidebar />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={escapeRealityVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="h-10 flex gap-3 px-3 items-center border-b border-line w-full">
            <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
            <p className="text-secondary-400 font-light">escape-reality</p>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{ initial: {}, animate: {}, exit: {} }}
            transition={{ staggerChildren: 0.3, delayChildren: 2 }}
            className="flex flex-col gap-3 pt-5 pb-7 px-4 border-b border-line"
          >
            {spotify_playlists.map(({ name, url }) => (
              <motion.div key={name} variants={listItemVariants}>
                <Link
                  key={name}
                  href={url}
                  target="_blank"
                  className="flex gap-2 items-center hover:text-secondary-400"
                >
                  <Image
                    src={external_link}
                    alt="external_link"
                    className="shrink-0"
                  />
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactMeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 2 }}
        >
          <div className="h-10 flex gap-3 px-3 items-center border-b border-line w-full">
            <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
            <p className="text-secondary-400 font-light">contacts</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <Link
              href={"mailto:" + SOCIALS.EMAIL}
              className="flex gap-2 items-center hover:text-secondary-400"
            >
              <Image src={mail} alt="mail" className="shrink-0" />
              send mail
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSidebar;
