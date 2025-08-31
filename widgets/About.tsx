import React from "react";

import { aboutTools } from "@/data/aboutTools";
import { aboutParagraphs } from "@/data/aboutParagraphs";

import "@/styles/widgets/about.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">
        I make beautiful <br />
        and fast UI's
      </h2>

      <div className="about-info">
        <div className="about-info-story">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>

        <div className="about-info-stack">
          {aboutTools.map((tool) => (
            <span key={tool.id} className="about-info-stack-item">
              <h4 className="about-info-stack-item-title">{tool.title}</h4>

              <p className="about-info-stack-item-text">{tool.content}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
