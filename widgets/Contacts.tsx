"use client";
import React, { useRef, useState } from "react";

import { useInView } from "framer-motion";

import ContactsForm from "@/features/ContactsForm";

import AnimatedTitle from "@/shared/AnimatedTitle";

import "@/styles/widgets/contacts.css";

const Contacts = () => {
  const contactsRef = useRef(null);

  const isInView = useInView(contactsRef, { once: true });

  const [isFormOpened, changeIsFormOpened] = useState(false);
  return (
    <>
      <section ref={contactsRef} className="contacts">
        <AnimatedTitle
          type={3}
          text="Хотите нанять меня?"
          className="contacts-title"
          wordSpace="mr-[12px]"
          charSpace="mr-[0.5px]"
        />

        <button
          onClick={() => changeIsFormOpened(true)}
          data-blobity-radius="15"
          className={`contacts-button ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[50px]"
          }`}
        >
          Свяжитесь со мной
        </button>
      </section>

      <ContactsForm
        isFormOpened={isFormOpened}
        changeIsFormOpened={changeIsFormOpened}
      />
    </>
  );
};

export default Contacts;
