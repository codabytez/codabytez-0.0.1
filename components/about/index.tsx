"use client";
import { useState } from "react";
import { NextPage } from "next";
import AboutSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeSnippet from "./code-snippet";
import CodeBlock from "../code-block";

const About: NextPage = () => {
  const [activeTab, setActiveTab] = useState("personal-info");

  const code = `/**
  * About me
  * I have 5 years of еxperience in web
  * development lorem ipsum dolor sit amet,
  * consectetur adipiscing elit, sed do eiusmod
  * tempor incididunt ut labore et dolore
  * magna aliqua. Ut enim ad minim veniam,
  * quis nostrud exercitation ullamco laboris
  * nisi ut aliquip ex ea commodo consequat.
  * Duis aute irure dolor in reprehenderit in
  *
  * Duis aute irure dolor in reprehenderit in
  * voluptate velit esse cillum dolore eu fugiat
  * nulla pariatur. Excepteur sint occaecat
  * officia deserunt mollit anim id est laborum.
  */`;
  return (
    <div className="flex w-full">
      <AboutSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex flex-col flex-1">
        <div className="w-max h-10 border-r border-line flex items-center gap-11 px-3.5 shrink-0">
          <p>{activeTab}</p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>

        <div className="border-t border-line w-full h-full flex justify-between items-stretch">
          <div className="basis-[48%] flex justify-center p-5 relative">
            <CodeBlock code={code} language="javascript" />

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </div>

          <div className="h-full w-[1px] bg-line" />
          <div className="basis-[52%] relative p-5">
            <p>// Code snippet showcase:</p>

            <div className="my-12">
              <CodeSnippet />
            </div>

            {/* side-scrollbar */}
            <div className="h-full w-6 absolute top-0 right-0 border-l border-line">
              <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// https://gist.github.com/schacon/1/

// % of 1471 that will give 700 and 771 respectively
// 700/1471 = 0.47619047619047616 * 100 = 47.61904761904761
// 771/1471 = 0.5238095238095238 * 100 = 52.38095238095238
// 47.61904761904761 + 52.38095238095238 = 100.0
