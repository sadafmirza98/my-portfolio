import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My Portfolio encapsulates a comprehensive snapshot of my professional journey, featuring a collection of experiences, projects, my resume, and social links. Delve into the world of my skills and accomplishments, discovering a blend of creativity and technical expertise. Explore my diverse interests and get to know the person behind the code. It is created using purely React js, javascript and CSS"
              ghLink="https://github.com/sadafmirza98/my-portfolio"
              /* demoLink="" */
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
