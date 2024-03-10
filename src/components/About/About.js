import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
/* import Github from "./Github"; */
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know About <strong className="pink">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div className="img-container">
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid img-animation"
              />
            </div>
          </Col>
        </Row>
        <Particle />

        {/* <h1 className="project-heading">
          <strong className="pink">Days</strong> I code
        </h1>
         <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
