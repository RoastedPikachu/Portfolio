"use client";
import React, { useRef } from "react";

import { useInView } from "framer-motion";

import "@/styles/entities/timeline.css";

const Timeline = () => {
  const timelineRef = useRef(null);

  const isInView = useInView(timelineRef, { once: true });
  return (
    <div
      ref={timelineRef}
      className={`timeline ${isInView ? "translate-y-0 opacity-100" : "translate-y-[16px] opacity-0"}`}
    >
      <div className="top-[23px] timeline-decorationCircle">
        <div className="timeline-decorationCircle-inner">
          <div className="timeline-decorationCircle-inner-center" />
        </div>
      </div>

      <div className="top-[349px] timeline-decorationCircle">
        <div className="timeline-decorationCircle-inner">
          <div className="timeline-decorationCircle-inner-center" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
