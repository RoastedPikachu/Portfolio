import React from "react";

import "@/styles/widgets/greetings.css";

const Greetings = () => {
  return (
    <section className="greetings">
      <div className="greetings-textBlock">
        <span className="greetings-textBlock-content">
          <p className="greetings-textBlock-startText">Hey, there</p>

          <h1 className="greetings-textBlock-title">
            <b>I'm </b>
            <b>Boris Karabut</b>
            <br />
            <b>a Frontend developer</b>
          </h1>

          <p className="greetings-textBlock-description">
            who works across the stack to deliver fast and beautiful websites
            and web apps that user will love
          </p>
        </span>

        <button
          data-blobity-radius="12"
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

          <p className="greetings-textBlock-contactButton-text">Contact me</p>
        </button>
      </div>

      <img src="/static/blank.png" alt="" className="greetings-portrait" />
    </section>
  );
};

export default Greetings;
