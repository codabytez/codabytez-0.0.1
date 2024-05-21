"use client";
import { NextPage } from "next";
import Image from "next/image";
import arrow_down from "@/public/arrow-down-fill.svg";
import CustomCheckbox from "../checkbox";
import react from "@/public/react.svg";
import html from "@/public/html.svg";
import css from "@/public/css.svg";
import vue from "@/public/vue.svg";
import angular from "@/public/angular.svg";
import gatsby from "@/public/gatsby.svg";
import flutter from "@/public/flutter.svg";

const projectTypes = [
  { name: "React", icon: react },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Vue", icon: vue },
  { name: "Angular", icon: angular },
  { name: "Gatsby", icon: gatsby },
  { name: "Flutter", icon: flutter },
];

const ProjectSidebar: NextPage<{
  handleSelect: (name: string) => void;
  selectedTech: string[];
}> = ({ handleSelect, selectedTech }) => {
  return (
    <div className="w-[310px] border-r border-line h-full flex shrink-0">
      <div className="flex flex-col h-full flex-1">
        <div className="h-10 flex gap-3 px-3 items-center w-full shrink-0">
          <Image src={arrow_down} alt="arrow_down" className="shrink-0" />
          <p className="text-secondary-400 font-light">projects</p>
        </div>

        <div className="flex flex-col gap-4 pt-5 pb-7 px-4 border-t border-line ">
          {projectTypes.map(({ name, icon }) => (
            <div key={name} className="flex gap-6 items-center">
              <CustomCheckbox onChange={() => handleSelect(name)} />
              <div
                className={`flex gap-2 items-center ${
                  selectedTech.includes(name) ? "opacity-100" : "opacity-40"
                }`}
              >
                <Image src={icon} alt={name} className="shrink-0" />
                <p
                  className={
                    selectedTech.includes(name) ? "text-secondary-400" : ""
                  }
                >
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
