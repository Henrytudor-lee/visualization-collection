// @ts-nocheck
import React, { useEffect } from "react";
import "particles.js";
import particlesParams from "./particlesParams";

const ParticlesBg = (props) => {
  useEffect(() => {
    particlesJS("particles-js", particlesParams);
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
      id="particles-js"
    >
      {props.children}
    </div>
  );
};

export default ParticlesBg;
