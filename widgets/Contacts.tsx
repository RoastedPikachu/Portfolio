"use client";
import React, { useRef } from "react";

import { useInView } from "framer-motion";

import AnimatedTitle from "@/entities/AnimatedTitle";

import "@/styles/widgets/contacts.css";

const Contacts = () => {
  const buttonRef = useRef(null);

  const isInView = useInView(buttonRef);
  return (
    <section className="contacts">
      <AnimatedTitle
        type={3}
        text="Want to hire me?"
        className="contacts-title"
        wordSpace="mr-[12px]"
        charSpace="mr-[0.5px]"
      />

      <button
        ref={buttonRef}
        data-blobity-radius="15"
        className={`contacts-button ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[50px]"
        }`}
      >
        Contact me
      </button>
    </section>
  );
};

export default Contacts;
