"use client";
import React, { useRef } from "react";

import { useInView } from "framer-motion";

import { aboutTools } from "@/data/aboutTools";
import { aboutParagraphs } from "@/data/aboutParagraphs";

import AnimatedTitle from "@/shared/AnimatedTitle";

import "@/styles/widgets/about.css";
import AnimatedParagraph from "@/shared/AnimatedParagraph";

const About = () => {
  const aboutRef = useRef(null);

  const isInView = useInView(aboutRef);
  return (
    <section ref={aboutRef} className="about">
      <AnimatedTitle
        type={2}
        text="I make beautiful and fast UI's"
        className="about-title"
        wordSpace="mr-[14px]"
        charSpace="mr-[0.5px]"
      />

      <div className="about-info">
        <div className="about-info-story">
          {aboutParagraphs.map((paragraph) => (
            <AnimatedParagraph key={paragraph.id}>
              {paragraph.text}
            </AnimatedParagraph>
          ))}
        </div>

        <div className="about-info-stack">
          {aboutTools.map((tool) => (
            <span key={tool.id} className="about-info-stack-item">
              <AnimatedTitle
                type={4}
                text={tool.title}
                className="about-info-stack-item-title"
                wordSpace="mr-[8px]"
                charSpace="mr-[0.5px]"
              />

              <AnimatedParagraph className="about-info-stack-item-text">
                {tool.content}
              </AnimatedParagraph>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
