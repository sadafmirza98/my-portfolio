import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Project Lead",
          "Senior Software Engineer",
          "PERN Stack Developer",
          "MEAN Stack Developer",
          "AWS Partner: Technical Accredited",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
