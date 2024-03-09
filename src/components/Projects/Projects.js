import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MapMemo from "../../Assets/Projects/MapMemo.png";
import GoalJutsu from "../../Assets/Projects/GoalJutsu.png";
import DebugDoodles from "../../Assets/Projects/debugDoodles.png";

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
              imgPath={DebugDoodles}
              isBlog={false}
              title="Debug Doodles"
              description="Debug Doodle is a straightforward code dumping website designed for developers to share code snippets and find solutions. Whether you're seeking solutions to coding challenges or eager to showcase your expertise, Debug Doodle provides the ideal environment for seamless collaboration and learning in the world of software development."
              ghLink="https://github.com/sadafmirza98/debug-doodles"
              demoLink="https://debug-doodles.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoalJutsu}
              isBlog={false}
              title="Goaljutsu"
              description="Goaljutsu is a Naruto-themed goal tracker crafted to empower users in managing, and achieving their goals through missions. With Goaljutsu, users can modify their goals while staying motivated with engaging Naruto interactions, fostering a fun and immersive goal-setting experience"
              ghLink="https://github.com/sadafmirza98/goaljutsu"
              demoLink="https://goaljutsu.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MapMemo}
              isBlog={false}
              title="Map Memo"
              description="Map Memo is a website for organizing travel experiences. Users can save favorite locations, add memories, or create bucket lists for future visits. With authentication and authorization features, users can sign up, log in, and efficiently manage saved places. It's a valuable tool for adventurers to personalize their travel experiences."
              ghLink="https://github.com/sadafmirza98/map-memo"
              demoLink="In progress"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
      </Container>
    </Container>
  );
}

export default Projects;
