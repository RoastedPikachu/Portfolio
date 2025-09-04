import React from "react";

import { workplaces } from "@/data/workplaces";

import Timeline from "@/entities/Timeline";
import Workplace from "@/entities/Workplace";

import AnimatedTitle from "@/shared/AnimatedTitle";
import AnimatedParagraph from "@/shared/AnimatedParagraph";

import "@/styles/widgets/work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="work-top">
        <AnimatedTitle
          type={2}
          text="Опыт работы"
          className="sectionTitle"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.5px]"
        />

        <AnimatedParagraph className="work-top-yearsCount">
          2 года
        </AnimatedParagraph>
      </div>

      <div className="work-experience">
        <Timeline />

        <div className="work-experience-container">
          {workplaces.map((workplace) => (
            <Workplace
              key={workplace.id}
              logo={workplace.logo}
              occupation={workplace.occupation}
              companyName={workplace.companyName}
              timeGap={workplace.timeGap}
              results={workplace.results}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
