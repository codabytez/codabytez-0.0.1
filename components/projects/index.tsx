"use client";
import React, { useEffect, useState } from "react";
import ProjectSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import ProjectCard from "./project-card";
import { projects } from "./projects";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSelect = (name: string) => {
    if (selectedTech.includes(name)) {
      setSelectedTech(
        selectedTech.filter((item) => item.toLowerCase() !== name.toLowerCase())
      );
    } else {
      setSelectedTech([...selectedTech, name]);
    }
  };

  useEffect(() => {
    if (selectedTech.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.techStack.some((tech) =>
            selectedTech
              .map((item) => item.toLowerCase())
              .includes(tech.toLowerCase())
          )
        )
      );
    }
  }, [selectedTech]);

  return (
    <div className="flex w-full">
      <ProjectSidebar handleSelect={handleSelect} selectedTech={selectedTech} />

      <div className="flex flex-col flex-1">
        <div className="w-max h-10 border-r border-line flex items-center gap-11 px-3.5 shrink-0">
          <p>
            {selectedTech.length > 0 ? selectedTech.join(" | ") : "projects"}
          </p>
          <button>
            <Image src={close} alt="close" />
          </button>
        </div>

        <div className="border-t border-line p-20 relative overflow-hidden">
          <motion.div
            key={filteredProjects.map((_, i) => i).join("-")}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex gap-10 flex-wrap overflow-auto items-stretch"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
                transition={{ duration: 0.5, delay: i * 0.5 }}
              >
                <ProjectCard key={i} {...project} index={i} />
              </motion.div>
            ))}
          </motion.div>

          {/* side-scrollbar */}
          <div className="h-full w-6 absolute top-0 right-0 border-l border-line shrink-0">
            <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
