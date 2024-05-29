"use client";
import { useState } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
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
import { useStarredGists } from "@/hooks/gists";
import { LoadingAnimation } from "../UI/loading";
import { ErrorAnimation } from "../UI/error";
import {
  useSpotifyAccessToken,
  useTopTracks,
  useTopArtists,
} from "@/hooks/spotify";

const About: NextPage = () => {
  const { data: token } = useSpotifyAccessToken();
  const { data: topTracks } = useTopTracks(token?.access_token!);
  const { data: topArtists } = useTopArtists(token?.access_token!);
  const { data, isSuccess, isLoading } = useStarredGists();
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
      ? music(topTracks!, topArtists!)
      : bio;

  const formattedCode = code
    .replace(/\/\*\*\s*\*\s*/g, "")
    .replace(/\s*\*\s*/g, "\n")
    .replace(/\s*\\\s*/g, " ")
    .replace(/\s*\/\s*/g, " ")
    .split(":")
    .slice(1);

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <p className="p-5 lg:hidden text-secondary-400">_about-me</p>

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
        className="flex flex-col lg:flex-1 xl:w-[calc(100%-310px)] h-full overflow-y-scroll"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="w-max h-10 border-r border-line hidden lg:flex items-center gap-11 px-3.5 shrink-0">
          <p>{activeTab}</p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>

        <p className="lg:hidden mt-6 px-3.5">
          <span className="text-secondary-400">{`// ${activeTab}`}</span>{" "}
          <span> {`/ ${contentTab}`} </span>
        </p>

        <div
          className="lg:border-t border-line w-full h-full flex flex-col xl:flex-row gap-10 xl:gap-5 xl:justify-between xl:items-stretch overflow-y-scroll my-3 lg:my-0 px-4 xl:px-0 overflow-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:w-[48%] flex lg:justify-center lg:p-5 relative xl:overflow-hidden xl:border-r border-line"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              className="hidden lg:block xl:overflow-x-scroll xl:mr-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <CodeBlock code={code} language="javascript" />
            </div>
            <p className="lg:hidden max-w-[650px]">{formattedCode}</p>

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line hidden xl:block">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="xl:w-[52%] relative lg:p-5 flex xl:block flex-col items-center"
          >
            <p className="self-stretch">{"// Code snippet showcase:"}</p>

            <div
              className="xl:my-5 pt-5 sm:p-5 flex flex-col gap-6 xl:overflow-y-scroll h-[calc(100%+20px)] xl:h-[calc(100%-90px)] w-full"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <AnimatePresence>
                {isLoading && <LoadingAnimation />}
                {!isLoading && !isSuccess && <ErrorAnimation />}
                {isSuccess &&
                  data
                    ?.sort((a) => (a.id === "1" ? -1 : 0))
                    .map((gist) => <CodeSnippet key={gist.id} gist={gist} />)}
              </AnimatePresence>
            </div>

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line hidden xl:block">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
