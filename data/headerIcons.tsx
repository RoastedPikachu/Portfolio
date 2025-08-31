import React from "react";

export const headerIcons = [
  // Linkedin logo
  {
    id: 1,
    path: "https://www.linkedin.com/in/korobka-boris",
    component: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)" fill="#fff">
          <path d="M6.5 8h-3v10h3zM5.01 4C3.917 4 3.2 4.72 3.2 5.664c0 .924.694 1.664 1.768 1.664h.021c1.116 0 1.811-.74 1.811-1.664C6.78 4.72 6.105 4 5.01 4m9.782 3c-1.896 0-2.745 1.042-3.22 1.774V7.253H8C8.047 8.26 8 18 8 18h3.572v-6.002c0-.321.023-.643.118-.872.258-.642.846-1.306 1.833-1.306 1.292 0 1.81.986 1.81 2.43V18h3.571v-6.163C18.905 8.536 17.143 7 14.792 7" />
        </g>
        <rect x=".5" y=".5" width="21" height="21" rx="3.5" stroke="#fff" />
        <defs>
          <clipPath id="a">
            <rect width="22" height="22" rx="4" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  // Github logo
  {
    id: 2,
    path: "https://github.com/RoastedPikachu",
    component: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 17.417c-4.583 1.375-4.583-2.292-6.417-2.75m12.834 5.5v-3.548a3.1 3.1 0 0 0-.862-2.392c2.878-.321 5.903-1.412 5.903-6.417 0-1.28-.492-2.51-1.375-3.438a4.65 4.65 0 0 0-.082-3.455s-1.082-.321-3.584 1.356a12.27 12.27 0 0 0-6.417 0C5.747.596 4.666.917 4.666.917a4.65 4.65 0 0 0-.083 3.455 5 5 0 0 0-1.375 3.465c0 4.969 3.025 6.06 5.904 6.417a3.1 3.1 0 0 0-.862 2.365v3.548"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  // Telegram logo
  {
    id: 3,
    path: "https://t.me/KorobkaBoris",
    component: (
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.712.71c.335-.124.535-.05.627.038.086.083.203.298.144.752l-.036.21-3.318 15.56c-.111.486-.28.643-.381.689-.098.044-.307.065-.7-.15l-5.026-3.683-.338-.248-.302.29-2.442 2.334-.007.007c-.143.142-.222.217-.311.268l-.014.006q-.002-.094-.002-.217c.01-.453.07-1.074.147-1.71a55 55 0 0 1 .337-2.32l.006-.047 9.244-8.303c.134-.12.307-.32.317-.591.012-.349-.236-.553-.441-.626a1.03 1.03 0 0 0-.566-.017c-.181.041-.37.122-.553.242L5.714 10.321.944 8.837c-.23-.071-.358-.15-.417-.206l-.016-.019a.5.5 0 0 1 .09-.097c.11-.097.302-.215.602-.331l-.001-.001L20.71.71Z"
          stroke="#fff"
        />
      </svg>
    ),
  },
  // Twitter logo
  {
    id: 4,
    path: "https://x.com/korobkaboris",
    component: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <mask
            id="b"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="22"
            height="22"
          >
            <path d="M22 0H0v22h22z" fill="#fff" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M13.093 9.31 21.283 0h-1.94L12.23 8.084 6.55 0H0l8.589 12.225L0 21.989h1.94l7.51-8.538 5.999 8.538H22zm-2.658 3.023-.87-1.218L2.64 1.43h2.981l5.588 7.817.87 1.217 7.264 10.162h-2.98z"
              fill="#fff"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h22v22H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
