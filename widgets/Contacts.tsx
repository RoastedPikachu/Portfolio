"use client";
import React, { useEffect, useRef, useState } from "react";

import { useInView } from "framer-motion";

import { useView } from "@/context/ViewProvider";

import ContactsForm from "@/features/ContactsForm";

import AnimatedTitle from "@/shared/AnimatedTitle";

import "@/styles/widgets/contacts.css";

const Contacts = () => {
  const { setSectionInView } = useView();

  const contactsRef = useRef(null);
  const buttonRef = useRef(null);

  const isInView = useInView(contactsRef);
  const isButtonInView = useInView(buttonRef, { once: true });

  const [isFormOpened, changeIsFormOpened] = useState(false);

  useEffect(() => {
    if (isInView) {
      setSectionInView("контакты");
    }
  }, [isInView]);
  return (
    <>
      <section id="contacts" ref={contactsRef} className="contacts">
        <AnimatedTitle
          type={3}
          text="Хотите нанять меня?"
          className="contacts-title"
          wordSpace="mr-[12px]"
          charSpace="mr-[0.5px]"
        />

        <button
          ref={buttonRef}
          onClick={() => changeIsFormOpened(true)}
          data-blobity-radius="15"
          className={`contacts-button ${
            isButtonInView
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
