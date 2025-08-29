"use client";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null) as any;

  const handleMouseMove = (event: any) => {
    if (cursorRef) {
      cursorRef.current.style.left = event.clientX - 20 + "px";
      cursorRef.current.style.top = event.clientY - 20 + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={cursorRef} className="customCursor">
      <div />
    </div>
  );
};

export default Cursor;
