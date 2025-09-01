import React from "react";

import { projects } from "@/data/projects";

import Project from "@/entities/Project";

import "@/styles/widgets/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>

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
