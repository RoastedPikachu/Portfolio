"use client";
import React, { useEffect, useRef } from "react";

import { useView } from "@/context/ViewProvider";

import {
  easeOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import "@/styles/widgets/greetings.css";

const Greetings = () => {
  const { setSectionInView } = useView();

  const greetingsRef = useRef(null);
  const imgRef = useRef(null);
  const mobileImgRef = useRef(null);

  const isInView = useInView(greetingsRef);

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeOut,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const animateIn3 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2.4,
    },
  };

  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const imgRotate = useTransform(scrollYProgress, [0, 1], ["6deg", "-8deg"]);

  useEffect(() => {
    if (isInView) {
      setSectionInView("главная");
    }
  }, [isInView]);
  return (
    <section ref={greetingsRef} className="greetings">
      <div className="greetings-textBlock">
        <span className="greetings-textBlock-content">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="greetings-textBlock-startText"
          >
            Привет,
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={animateIn1}
            className="greetings-textBlock-title"
          >
            <b>Я </b>
            <b>Борис Карабут</b>
            <br />
            <b>Frontend разработчик</b>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={animateIn2}
            className="greetings-textBlock-description"
          >
            который работает над созданием быстрых и красивых веб-сайтов и
            веб-приложений, которые полюбят пользователи.
          </motion.p>
        </span>

        <motion.button
          data-blobity-radius="12"
          initial={{ opacity: 0 }}
          animate={animateIn3}
          className="greetings-textBlock-contactButton"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.333.917H3.667A3.677 3.677 0 0 0 0 4.583v9.167a3.677 3.677 0 0 0 3.667 3.667v2.75c0 .825 1.008 1.191 1.558.641l3.392-3.391h9.716A3.677 3.677 0 0 0 22 13.75V4.583A3.677 3.677 0 0 0 18.333.917m-5.5 11h-5.5c-.55 0-.916-.367-.916-.917s.366-.917.916-.917h5.5c.55 0 .917.367.917.917s-.367.917-.917.917m1.834-3.667H7.333c-.55 0-.916-.367-.916-.917s.366-.916.916-.916h7.334c.55 0 .916.366.916.916s-.366.917-.916.917"
              fill="#0D0D0E"
            />
          </svg>

          <p className="greetings-textBlock-contactButton-text">
            Связаться со мной
          </p>
        </motion.button>
      </div>

      <motion.img
        src="/static/profile-picture.png"
        alt=""
        ref={imgRef}
        style={{
          rotate: imgRotate,
        }}
        initial={{ opacity: 0 }}
        animate={animateIn1}
        className="greetings-portrait desktop"
      />

      <motion.img
        src="/static/profile-picture.png"
        alt=""
        ref={mobileImgRef}
        initial={{ opacity: 0 }}
        animate={animateIn1}
        className="greetings-portrait mobile"
      />
    </section>
  );
};

export default Greetings;
