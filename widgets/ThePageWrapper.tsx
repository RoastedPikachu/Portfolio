import React from "react";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import Cursor from "@/entities/Cursor";
import MobileHeader from "@/widgets/MobileHeader";

const ThePageWrapper: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Header />

      <MobileHeader />

      <Cursor />

      {children}

      <Footer />
    </>
  );
};

export default ThePageWrapper;
