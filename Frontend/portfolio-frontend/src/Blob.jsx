import React, { useEffect } from "react";
import "./Styles/Blob.css";

const Blob = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 3000,
          fill: "forwards",
        }
      );
    };
  }, []);

  return <div id="blob-container"><div id="blob"></div></div>;
};

export default Blob;