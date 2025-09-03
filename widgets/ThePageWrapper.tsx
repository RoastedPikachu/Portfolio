import React from "react";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import Cursor from "@/entities/Cursor";

const ThePageWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />

      <Cursor />

      {children}

      <Footer />
    </>
  );
};

export default ThePageWrapper;
