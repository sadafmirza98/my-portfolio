import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAngularSimple,
  DiHtml5,
  DiMysql
} from "react-icons/di";

import {
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">JavaScript</span>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">React</span>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Angular</span>
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">HTML</span>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Node js</span>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">AWS Technical Accredited</span>
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">MongoDB</span>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">Git</span>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="tooltip">SQL</span>
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
