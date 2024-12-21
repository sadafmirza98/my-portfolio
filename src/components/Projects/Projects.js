import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MapMemo from "../../Assets/Projects/MapMemo.png";
import TileTrek from "../../Assets/Projects/TileTrek.png";
import GoalJutsu from "../../Assets/Projects/GoalJutsu.png";
import DebugDoodles from "../../Assets/Projects/debugDoodles.png";
import MetricsMaster from "../../Assets/Projects/MetricsMaster.png";
import LaneRush from "../../Assets/Projects/LaneRush.png";

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
              description="Debug Doodles is a web app that allows users to create, manage, and store their own code repository. It acts as a personal code dump for storing and sharing programming challenges and solutions offering a modern, interactive experience for developers to manage their code in one place."
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
              imgPath={MetricsMaster}
              isBlog={false}
              title="Metrics Master"
              description="Metrics Master is your go-to app for creating detailed reports and dynamic visual analytics. Select the metrics you need, and the app generates insightful reports and stunning graphical representations, empowering you to visualize data trends and make informed decisions with ease."
              ghLink="https://github.com/sadafmirza98/custom-cv-report"
              demoLink="https://metrics-master.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TileTrek}
              isBlog={false}
              title="Tile Trek"
              description="A fun and interactive implementation of the classic 2048 puzzle game built with React. This project features a clean, responsive UI, smooth animations, and a challenging game mechanic where the goal is to combine tiles to reach the elusive 2048 tile."
              ghLink="https://github.com/sadafmirza98/2048-game"
              demoLink="https://tile-trek.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaneRush}
              isBlog={false}
              title="Lane Rush"
              description="A fun and interactive implementation of the classic racing game built with JS. This project features a clean, responsive UI, smooth animations, and a challenging game mechanic."
              ghLink="https://github.com/sadafmirza98/lane-rush"
              demoLink="https://lane-rush.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MapMemo}
              isBlog={false}
              title="Map Memo"
              description="Map Memo is a website for organizing travel experiences. Users can save favorite locations, add memories, or create bucket lists for future visits. With authentication and authorization features, users can sign up, log in, and efficiently manage saved places. It's a valuable tool for adventurers to personalize their travel experiences."
              ghLink="https://github.com/sadafmirza98/map-memo"
              demoLink="https://map-memo.netlify.app/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
      </Container>
    </Container>
  );
}

export default Projects;
