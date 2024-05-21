import { NextPage } from "next";
import {
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "@remixicon/react";
import Link from "next/link";
import { SOCIALS } from "@/constants";

const Footer: NextPage = () => {
  return (
    <footer className="w-full min-h-[50px] flex items-stretch justify-between border-t border-line">
      <div className="flex items-center">
        <p className="px-5 border-r border-line self-stretch flex items-center">
          Find me on:
        </p>
        <Link
          href={SOCIALS.TWITTER}
          className="px-3.5 shrink-0 hover:opacity-40 border-r border-line self-stretch flex items-center"
          target="_blank"
        >
          <RiTwitterFill size={24} className="shrink-0" />
        </Link>

        <Link
          href={SOCIALS.LINKEDIN}
          className="px-3.5 shrink-0 hover:opacity-40 border-r border-line self-stretch flex items-center"
          target="_blank"
        >
          <RiLinkedinBoxFill size={24} className="shrink-0" />
        </Link>
      </div>

      <Link
        href={SOCIALS.GITHUB}
        className="py-3 px-6 shrink-0 hover:opacity-40 border-l border-line self-stretch flex gap-2"
        target="_blank"
      >
        <p>@codabytez</p>
        <RiGithubFill size={24} className="shrink-0" />
      </Link>
    </footer>
  );
};

export default Footer;
