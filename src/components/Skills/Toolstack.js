import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiDocker,
  SiJirasoftware,
  SiPostgresql,
  SiGithub,
  SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span className="tooltip">Visual Studio Code</span>
        <VscVscode />
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
        <FaAws />
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
      <Col xs={4} md={2} className="tech-icons">
        <span className="tooltip">Firebase</span>
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Toolstack;
