"use client";
import React, { useEffect, useState } from "react";
import ProjectSidebar from "./sidebar";
import Image from "next/image";
import close from "@/public/close.svg";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";
import ProjectEmptyState from "./project-empty-state";
import { useProjects } from "@/hooks/projects";
import { LoadingAnimation } from "../UI/loading";
import { ErrorAnimation } from "../UI/error";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const { data, isLoading, isError } = useProjects();
  const [filteredProjects, setFilteredProjects] = useState<
    ContentfulResponse[]
  >([]);

  useEffect(() => {
    if (data) {
      if (selectedTech.length === 0) {
        setFilteredProjects(data);
      } else {
        setFilteredProjects(
          data.filter((project: ContentfulResponse) =>
            project.fields.tags.some((tech) =>
              selectedTech
                .map((item) => item.toLowerCase())
                .includes(tech.toLowerCase())
            )
          )
        );
      }
    }
  }, [selectedTech, data]);

  const handleSelect = (name: string) => {
    if (selectedTech.includes(name)) {
      setSelectedTech(
        selectedTech.filter((item) => item.toLowerCase() !== name.toLowerCase())
      );
    } else {
      setSelectedTech([...selectedTech, name]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <p className="p-5 lg:hidden text-secondary-400">_projects</p>
      <ProjectSidebar handleSelect={handleSelect} selectedTech={selectedTech} />

      <div
        className="flex flex-col overflow-y-scroll h-full flex-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="w-max lg:h-10 lg:border-r lg:border-line flex items-center gap-11 px-3.5 shrink-0">
          <p className="hidden lg:block">
            {selectedTech.length > 0 ? selectedTech.join(" | ") : "projects"}
          </p>
          <p className="pt-10 lg:hidden">
            {"// projects /"}{" "}
            {selectedTech.length > 0 ? selectedTech.join(" | ") : "all"}
          </p>
          <button className="hidden lg:flex">
            <Image src={close} alt="close" />
          </button>
        </div>

        <div className="lg:border-t lg:border-line p-10 2xl:p-20 relative overflow-hidden h-full">
          {isLoading ? (
            <LoadingAnimation />
          ) : isError ? (
            <ErrorAnimation />
          ) : filteredProjects.length === 0 ? (
            <ProjectEmptyState />
          ) : (
            <motion.div
              key={filteredProjects.map((_, i) => i).join("-")}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="size-full gap-x-5 gap-y-10 overflow-auto items-stretch center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
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
                  <ProjectCard
                    key={project.sys.id}
                    {...project}
                    index={i}
                    isLoading={isLoading}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* side-scrollbar */}
          <div className="h-full w-6 absolute top-0 right-0 border-l border-line shrink-0 hidden lg:flex">
            <div className="w-[18px] h-2 bg-secondary-100 mx-auto mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
