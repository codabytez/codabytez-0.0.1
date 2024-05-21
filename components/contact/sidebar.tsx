"use client";
import { NextPage } from "next";
import Image from "next/image";
import arrow_down from "@/public/arrow-down-fill.svg";
import external_link from "@/public/external-link.svg";
import mail from "@/public/mail.svg";
import Link from "next/link";
import { SOCIALS } from "@/constants";

const links = [
  { href: SOCIALS.INSTAGRAM, text: "instagram-account" },
  { href: SOCIALS.BENTO, text: "bento-profile" },
  { href: SOCIALS.WAKATIME, text: "wakatime-profile" },
];

const ContactSidebar: NextPage = () => {
  return (
    <div className="w-[310px] border-r border-line h-full flex flex-col">
      <div className="h-10 flex gap-3 px-3 items-center w-full">
        <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
        <p className="text-secondary-400 font-light">contacts</p>
      </div>

      <div className="flex flex-col gap-2 px-4 pt-4 pb-7 border-y border-line ">
        <Link
          href={"mailto:" + SOCIALS.EMAIL}
          className="flex gap-2 items-center hover:text-secondary-400"
        >
          <Image src={mail} alt="mail" className="shrink-0" />
          send-mail
        </Link>
      </div>

      <div className="h-10 flex gap-3 px-3 items-center border-b border-line w-full">
        <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
        <p className="text-secondary-400 font-light">find-me-also-on</p>
      </div>

      <div className="flex flex-col gap-3 pt-5 pb-7 px-4">
        {links.map(({ href, text }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            className="flex gap-2 items-center hover:text-secondary-400"
          >
            <Image
              src={external_link}
              alt="external_link"
              className="shrink-0"
            />
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactSidebar;
