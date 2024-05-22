"use client";
import { useState } from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import AboutSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import CodeSnippet from "./code-snippet";
import CodeBlock from "../code-block";
import {
  bio,
  interests,
  education,
  experience,
  hardSkills,
  softSkills,
  sports,
  movies,
  music,
} from "./code";

const About: NextPage = () => {
  const [activeTab, setActiveTab] = useState("personal-info");
  const [contentTab, setContentTab] = useState("bio");

  const code =
    contentTab === "interests"
      ? interests
      : contentTab === "education"
      ? education
      : contentTab === "experience"
      ? experience
      : contentTab === "hard-skills"
      ? hardSkills
      : contentTab === "soft-skills"
      ? softSkills
      : contentTab === "sports"
      ? sports
      : contentTab === "movies"
      ? movies
      : contentTab === "music"
      ? music
      : bio;

  return (
    <div className="flex w-full">
      <AboutSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setContentTab={setContentTab}
      />

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col flex-1"
      >
        <div className="w-max h-10 border-r border-line flex items-center gap-11 px-3.5 shrink-0">
          <p>{activeTab}</p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>

        <div className="border-t border-line w-full h-full flex justify-between items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="basis-[48%] flex justify-center p-5 relative"
          >
            <CodeBlock code={code} language="javascript" />

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </motion.div>

          <div className="h-full w-[1px] bg-line" />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="basis-[52%] relative p-5"
          >
            <p>{"// Code snippet showcase:"}</p>

            <div className="my-12">
              <CodeSnippet />
            </div>

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

// https://gist.github.com/schacon/1/

// % of 1471 that will give 700 and 771 respectively
// 700/1471 = 0.47619047619047616 * 100 = 47.61904761904761
// 771/1471 = 0.5238095238095238 * 100 = 52.38095238095238
// 47.61904761904761 + 52.38095238095238 = 100.0
