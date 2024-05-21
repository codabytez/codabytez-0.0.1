"use client";
import { NextPage } from "next";
import Link from "next/link";
import { PAGES } from "@/constants";
import { usePathname } from "next/navigation";

const links = [
  { href: PAGES.HOME, text: "_hello" },
  { href: PAGES.ABOUT, text: "_about-me" },
  { href: PAGES.PROJECTS, text: "_projects" },
];

const Navbar: NextPage = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full min-h-[60px] flex items-stretch justify-between border-b border-line">
      <div className="flex items-center">
        <p className="px-5 border-r border-line self-stretch flex items-center min-w-[310px]">
          codabytez
        </p>

        {links.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            className={`px-8 shrink-0 hover:opacity-40 border-r border-line self-stretch flex items-center ${
              pathname === href
                ? "text-secondary-400 border-b-4 border-b-accent-100"
                : ""
            }`}
          >
            {text}
          </Link>
        ))}
      </div>

      <Link
        href={PAGES.CONTACT}
        className={`px-8 shrink-0 hover:opacity-40 border-l border-line self-stretch flex items-center ${
          pathname === PAGES.CONTACT
            ? "text-secondary-400 border-b-4 border-b-accent-100"
            : ""
        }`}
      >
        _contact-me
      </Link>
    </nav>
  );
};

export default Navbar;
