import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiJirasoftware,
  SiPostgresql,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tooltip">Visual Studio Code</span>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Postman</span>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Docker</span>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">AWS Console</span>
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Jira</span>
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">PostgreSQL</span>
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">GitHub</span>
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
