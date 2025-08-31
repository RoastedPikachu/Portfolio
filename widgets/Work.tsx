import React from "react";

import { workplaces } from "@/data/workplaces";

import "@/styles/widgets/work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="work-top">
        <h2 className="work-top-title">Work experience</h2>

        <p className="work-top-yearsCount">2 years</p>
      </div>

      <div className="work-experience">
        <div className="work-experience-decorationLine">
          <div className="top-[23px] work-experience-decorationCircle">
            <div className="work-experience-decorationCircle-inner">
              <div className="work-experience-decorationCircle-inner-center" />
            </div>
          </div>

          <div className="top-[349px] work-experience-decorationCircle">
            <div className="work-experience-decorationCircle-inner">
              <div className="work-experience-decorationCircle-inner-center" />
            </div>
          </div>
        </div>

        <div className="work-experience-container">
          {workplaces.map((workplace) => (
            <div key={workplace.id} className="work-experience-container-item">
              <img
                src={workplace.logo}
                alt=""
                className="work-experience-container-item-image"
              />

              <div className="work-experience-container-item-textContent">
                <h3 className="work-experience-container-item-textContent-occupation">
                  {workplace.occupation}
                </h3>

                <h4 className="work-experience-container-item-textContent-company">
                  {workplace.companyName}
                </h4>

                <p className="work-experience-container-item-textContent-timeGap">
                  {workplace.timeGap}
                </p>

                <ul className="work-experience-container-item-textContent-results">
                  {workplace.results.map((result) => (
                    <li key={result.id}>{result.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
