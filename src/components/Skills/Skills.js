import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Technology <strong className="pink">Stack</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="pink">Tools</strong> Stack
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
