import React, { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {
  const [code, setCode] = useState("");
  const fullCode = `
  <html>
  <head>
    <title>Loading...</title>
  </head>
  <body>
    <h1>Welcome to Developer's World</h1>
  </body>
  </html>
  `;

  useEffect(() => {
    const timer = setInterval(() => {
      if (code.length < fullCode.length) {
        setCode((prevCode) => prevCode + fullCode[prevCode.length]);
      }
    }, 10);

    setTimeout(() => {
      const el = document.querySelector(".loader-wrapper");
      if (el) el.style.display = "none";
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [code]);

  return (
    <div className="loader-wrapper">
      <div className="code-editor">
        {code.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
        <span className="cursor" />
      </div>
    </div>
  );
}

export default Loader;
