import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function CursorWrapper() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);

    const clickableElements = ["BUTTON", "A", "INPUT", "TEXTAREA"];

    const mouseEnter = () => {
      document.body.classList.add("hovering-element");
    };

    const mouseLeave = () => {
      document.body.classList.remove("hovering-element");
    };

    clickableElements.forEach((tag) => {
      document.querySelectorAll(tag).forEach((element) => {
        element.addEventListener("mouseenter", mouseEnter);
        element.addEventListener("mouseleave", mouseLeave);
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      clickableElements.forEach((tag) => {
        document.querySelectorAll(tag).forEach((element) => {
          element.removeEventListener("mouseenter", mouseEnter);
          element.removeEventListener("mouseleave", mouseLeave);
        });
      });
    };
  }, []);

  return (
    <>
      <App />
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorWrapper />
  </React.StrictMode>
);
