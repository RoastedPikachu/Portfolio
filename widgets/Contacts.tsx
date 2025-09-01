import React from "react";

import "@/styles/widgets/contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <h3 className="contacts-title">Want to hire me?</h3>

      <button data-blobity-radius="15" className="contacts-button">
        Contact me
      </button>
    </section>
  );
};

export default Contacts;
