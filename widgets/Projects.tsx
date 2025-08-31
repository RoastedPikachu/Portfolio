import React from "react";

import Project from "@/entities/Project";

import "@/styles/widgets/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        <Project />
      </div>
    </section>
  );
};

export default Projects;
