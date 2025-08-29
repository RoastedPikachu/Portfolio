import React from "react";

import Header from "@/widgets/Header";
import Cursor from "@/entities/Cursor";

const ThePageWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />

      <Cursor />

      {children}
    </>
  );
};

export default ThePageWrapper;
