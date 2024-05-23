"use client";
import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { PAGES } from "@/constants";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: PAGES.HOME, text: "_hello" },
  { href: PAGES.ABOUT, text: "_about-me" },
  { href: PAGES.PROJECTS, text: "_projects" },
];

const Navbar: NextPage = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[60px] border-b border-line relative flex">
      <p className="font-medium select-none px-5 h-[60px] lg:border-r lg:border-line self-stretch flex items-center min-w-[310px]">
        codabytez
      </p>

      <div
        className={`flex items-stretch justify-between lg:!h-full w-full flex-col lg:flex-row absolute lg:relative top-[60px] lg:top-0 z-20 bg-primary-200 rounded-b-lg lg:rounded-b-none lg:rounded-tr-lg ${
          isMenuOpen ? "left-0" : "-left-[100vw] lg:left-0"
        } transition-all duration-300`}
        style={{
          height: "min(885px, calc(100vh - 90px))",
        }}
      >
        <div className="flex lg:h-full flex-col lg:flex-row w-full lg:justify-between">
          <div className="flex items-center lg:h-full flex-col lg:flex-row">
            {links.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className={`px-8 py-5 lg:py-auto shrink-0 hover:opacity-40 border-b lg:border-r border-line self-stretch flex items-center ${
                  pathname === href
                    ? "text-secondary-400 border-b-4 border-b-accent-100"
                    : "lg:border-b-0"
                }`}
                onClick={toggleMenu}
              >
                {text}
              </Link>
            ))}
          </div>

          <Link
            href={PAGES.CONTACT}
            className={`px-8 py-5 lg:py-auto shrink-0 hover:opacity-40 border-b lg:border-l border-line self-stretch flex items-center ${
              pathname === PAGES.CONTACT
                ? "text-secondary-400 border-b-4 border-b-accent-100"
                : "lg:border-b-0"
            }`}
            onClick={toggleMenu}
          >
            _contact-me
          </Link>
        </div>

        <p className="p-5 shrink-0 border-t border-line lg:hidden text-center select-none">
          © {new Date().getFullYear()} codabytez
        </p>
      </div>

      <motion.button
        onClick={toggleMenu}
        animate={isMenuOpen ? "open" : "closed"}
        className="shrink-0 hover:opacity-40 lg:hidden absolute right-5 top-0 bottom-0 my-auto z-50"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="#607B96"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#607B96"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="#607B96"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>
    </nav>
  );
};

export default Navbar;
