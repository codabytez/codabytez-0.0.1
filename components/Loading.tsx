"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";

const LoadingPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-primary-200">
      {/* Animated SVG */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <svg
          className="w-20 h-20 text-accent-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <p className="text-accent-200 text-2xl font-bold">Loading</p>
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <circle
              fill="#43D9AD"
              stroke="#43D9AD"
              stroke-width="10"
              r="15"
              cx="40"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="1.8"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              ></animate>
            </circle>
            <circle
              fill="#43D9AD"
              stroke="#43D9AD"
              stroke-width="10"
              r="15"
              cx="100"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="1.8"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              ></animate>
            </circle>
            <circle
              fill="#43D9AD"
              stroke="#43D9AD"
              stroke-width="10"
              r="15"
              cx="160"
              cy="100"
            >
              <animate
                attributeName="opacity"
                calcMode="spline"
                dur="1.8"
                values="1;0;1;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </div>
        <p className="text-secondary-100 mt-2">
          Please wait while we load your content
        </p>
      </motion.div>

      {/* Animated Code Snippet */}
      <motion.div
        className="mt-8 p-4 rounded-lg bg-primary-300 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-accent-200 mr-2" />
          <div className="w-3 h-3 rounded-full bg-secondary-200 mr-2" />
          <div className="w-3 h-3 rounded-full bg-accent-100" />
        </div>
        <div className="mt-4 text-code-snippet text-secondary-100">
          <p>
            <span className="text-accent-200">import</span>{" "}
            <span className="text-secondary-300">{"{ NextPage }"}</span> from{" "}
            <span className="text-accent-100">'next'</span>;
          </p>
          <p>
            <span className="text-accent-200">import</span>{" "}
            <span className="text-secondary-300">ThemeProvider</span> from{" "}
            <span className="text-accent-100">'@theme/ThemeProvider'</span>;
            <br /> <br />
          </p>
          <p>
            <span className="text-secondary-100">const</span>{" "}
            <span className="text-accent-200">
              App<span className="text-secondary-400">:</span> NextPage
            </span>{" "}
            = <span className="text-secondary-100">()</span> =&gt; (
          </p>
          <p className="ml-4">
            <span className="text-secondary-100">return</span> (
          </p>
          <p className="ml-8">
            &lt;<span className="text-accent-200">ThemeProvider</span>&gt;
          </p>
          <p className="ml-12">
            &lt;<span className="text-accent-200">p</span>&gt;Hello World!!&lt;/
            <span className="text-accent-200">p</span>&gt;
          </p>
          <p className="ml-12 lg:hidden">
            &lt;<span className="text-accent-200">p</span> className="
            <span className="text-accent-100">text-accent-200</span>"&gt; <br />
            &nbsp;&nbsp; For best experience, open this site on a desktop or
            laptop.
            <br />
            &lt;/<span className="text-accent-200">p</span>&gt;
          </p>
          <p className="ml-8">
            &lt;/<span className="text-accent-200">ThemeProvider</span>&gt;
          </p>
          <p className="ml-4">);</p>
          <p>);</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
