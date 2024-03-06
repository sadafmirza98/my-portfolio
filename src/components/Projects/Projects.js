import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import MapMemo from "../../Assets/Projects/MapMemo.png";

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
              description="My Portfolio encapsulates a comprehensive snapshot of my professional journey, featuring a collection of experiences, projects, my resume, and social links. Delve into the world of my skills and accomplishments, discovering a blend of creativity and technical expertise. Explore my diverse interests and get to know the person behind the code. It is created using purely React js, Javascript, Bootstrap and CSS"
              ghLink="https://github.com/sadafmirza98/my-portfolio"
              /* demoLink="" */
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MapMemo}
              isBlog={false}
              title="Map Memo"
              description="Map Memo is a website where users can save their favorite locations, add memories, or use it as a bucket list for future visits. With Map Memo, users can easily organize and personalize their travel experiences, making it a valuable tool for adventurers and explorers. Additionally, users can create personalized accounts for efficient management of saved places. With authentication and authorization features, users can sign up, log in, and perform actions such as adding, editing, and deleting locations."
              ghLink="https://github.com/sadafmirza98/map-memo"
              /* demoLink="" */
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
      </Container>
    </Container>
  );
}

export default Projects;
