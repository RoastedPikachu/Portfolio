import React from "react";

import Header from "@/widgets/Header";
import MobileHeader from "@/widgets/MobileHeader";
import Footer from "@/widgets/Footer";

import Cursor from "@/entities/Cursor";

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
