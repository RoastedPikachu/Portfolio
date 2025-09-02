import React from "react";

import { projects } from "@/data/projects";

import Project from "@/entities/Project";

import AnimatedTitle from "@/shared/AnimatedTitle";

import "@/styles/widgets/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <AnimatedTitle
        type={2}
        text="Projects"
        className="projects-title"
        wordSpace="mr-[14px]"
        charSpace="mr-[0.5px]"
      />

      <div className="projects-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            owner={project.owner}
            banner={project.banner}
            title={project.title}
            siteLink={project.siteLink}
            githubLink={project.githubLink}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
