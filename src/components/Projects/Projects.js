import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MapMemo from "../../Assets/Projects/MapMemo.png";
import GoalJutsu from "../../Assets/Projects/GoalJutsu.png";

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
              imgPath={MapMemo}
              isBlog={false}
              title="Map Memo"
              description="Map Memo is a website where users can save their favorite locations, add memories, or use it as a bucket list for future visits. With Map Memo, users can easily organize and personalize their travel experiences, making it a valuable tool for adventurers and explorers. Additionally, users can create personalized accounts for efficient management of saved places. With authentication and authorization features, users can sign up, log in, and perform actions such as adding, editing, and deleting locations."
              ghLink="https://github.com/sadafmirza98/map-memo"
              demoLink="In progress"
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
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
      </Container>
    </Container>
  );
}

export default Projects;
